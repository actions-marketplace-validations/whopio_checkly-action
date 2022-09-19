import { exec as _exec, ExecException } from "child_process";
import { readdir, readJSON, stat } from "fs-extra";
import { TypedFlags } from "meow";
import minimatch from "minimatch";
import { dirname, join, parse, relative } from "path";
import { promisify } from "util";
import flags from "../flags";
import { FullChecklyConfig } from "../types";
import { config } from "dotenv";

const exec = promisify(_exec);

type TestCollection = {
  name: string;
  files: string[];
  folders: TestCollection[];
};

const collectTests = async (
  dir: string,
  filter: string[] | undefined,
  baseDir: string = dir
): Promise<TestCollection> => {
  const collection: TestCollection = {
    name: dir,
    files: [],
    folders: [],
  };
  const filesAndFolders = await readdir(dir);
  for (const fileOrFolder of filesAndFolders) {
    const full = join(dir, fileOrFolder);
    if ((await stat(full)).isDirectory())
      collection.folders.push(await collectTests(full, filter, baseDir));
    else {
      if (filter && filter.length) {
        let matched = false;
        for (const singleFilter of filter) {
          if (minimatch(dirname(relative(baseDir, full)), singleFilter)) {
            matched = true;
            break;
          }
        }
        if (matched) collection.files.push(full);
      } else collection.files.push(full);
    }
  }
  return collection;
};

const run = async ({
  outDir,
  directory,
  filter,
  verbose,
  head,
}: TypedFlags<typeof flags>) => {
  if (!directory) return;
  try {
    config({ path: join(directory, ".env") });
  } catch {}
  const testsDirectory = join(directory, outDir);
  const tests2 = await collectTests(testsDirectory, filter);
  const totalTests = countCollectionTasks(tests2);
  console.log(`Running ${totalTests} Task${totalTests !== 1 ? "s" : ""}`);
  const start = Date.now();
  const { success, total } = await runCollection(
    testsDirectory,
    tests2,
    verbose,
    "",
    head,
    filter
  );
  console.log(
    `Done in ${Date.now() - start}ms: ${success}/${total} Tests passed`
  );
};

const runCollection = async (
  baseDir: string,
  collection: TestCollection,
  verbose: boolean,
  prefix: string,
  head: boolean,
  filter?: string[],
  result: { success: number; total: number } = {
    success: 0,
    total: 0,
  }
) => {
  let subtasks = countCollectionTasks(collection);
  if (collection.files.find((item) => item.endsWith("/config.json"))) {
    result.total++;
    subtasks--;
    if (await runTest(collection.name, verbose, prefix, head)) {
      result.success++;
    }
  }

  if (subtasks) {
    const name = relative(baseDir, collection.name);
    if (name)
      console.log(
        `${prefix}Sub-Task (${relative(
          baseDir,
          collection.name
        )}) with ${subtasks} Task${subtasks !== 1 ? "s" : ""}`
      );
    const start = Date.now();
    for (const folder of collection.folders) {
      await runCollection(
        baseDir,
        folder,
        verbose,
        prefix ? prefix + "| " : " | ",
        head,
        filter,
        result
      );
    }
    if (name)
      console.log(
        `${prefix}Sub-Task (${relative(baseDir, collection.name)}) done in ${
          Date.now() - start
        }ms`
      );
  }

  return result;
};

const countCollectionTasks = (collection: TestCollection) => {
  let total = 0;
  if (collection.files.length) total++;
  for (const folder of collection.folders)
    total += countCollectionTasks(folder);
  return total;
};

const runTest = async (
  dir: string,
  verbose: boolean,
  prefix: string,
  head: boolean
) => {
  const { name } = parse(dir);
  const { activated, shouldFail } = (await readJSON(
    join(dir, "config.json")
  )) as FullChecklyConfig;
  let result: boolean;
  if (activated) {
    let error: string | Error = "";
    process.stdout.write(`${prefix}Task (${name}) running`);
    const start = Date.now();
    try {
      await exec(`node ./${join(dir, "script.js")} ${head ? "--head" : ""}`);
      if (shouldFail) {
        result = false;
        error = "Expected test to fail but test succeeded";
      } else result = true;
    } catch (e) {
      if (shouldFail) result = true;
      else {
        result = false;
        error = e instanceof Error ? e : "Unknown Error";
      }
    }
    const duration = Date.now() - start;
    process.stdout.clearLine && process.stdout.clearLine(0);
    process.stdout.cursorTo
      ? process.stdout.cursorTo(0)
      : process.stdout.write("\n");
    if (result) {
      process.stdout.write(`${prefix}Task (${name}) success in ${duration}ms`);
      process.stdout.write("\n");
    } else {
      process.stdout.write(`${prefix}Task (${name}) failure in ${duration}ms`);
      process.stdout.write("\n");
      if (verbose)
        console.log(
          parseError(error)
            .split("\n")
            .map((part) => `${prefix}| ${part}`)
            .join("\n")
        );
    }
    return result;
  }
  console.log(`${prefix}Task (${name}) skipped`);
  return true;
};

interface ActualExecException extends ExecException {
  stdout: string;
  stderr: string;
}

const isExecException = (e: any): e is ActualExecException => {
  return e instanceof Error && "stderr" in e;
};

const parseError = (e: any) => {
  if (isExecException(e)) {
    const [, ...messageParts] = e.message.split("\n").reverse();
    const message = [];
    for (const part of messageParts) {
      message.push(part);
      if (part.charAt(0) !== " ") break;
    }
    return message.reverse().join("\n");
  }
  return "Unknown Error";
};

export default run;
