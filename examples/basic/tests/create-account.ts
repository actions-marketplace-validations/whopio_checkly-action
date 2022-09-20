import { InferContext } from "@whop-sdk/checkly-action";
import type before from "./_before";

export const config = {
  description: "should be able to log in",
  tags: [],
  activated: false,
  muted: true,
  doubleCheck: true,
  shouldFail: false,
  locations: [],
};

export default async (ctx: InferContext<typeof before>) => {
  console.log("test");
  await ctx.page.goto(process.env.SITE_URL!);
};
