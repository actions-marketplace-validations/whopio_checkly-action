/**
 * Checkly Public API
 * These are the docs for the newly released Checkly Public API.<br />If you have any questions, please do not hesitate to get in touch with us.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* The response data for a browser check.
*/
export class CheckResultBrowser {
    /**
    * The type of framework the check is using.
    */
    'type'?: string;
    /**
    * List of errors on the check run.
    */
    'errors'?: Array<string>;
    /**
    * End time of the check run.
    */
    'endTime'?: number;
    /**
    * Start time of the check run.
    */
    'startTime'?: number;
    /**
    * Active runtime version.
    */
    'runtimeVersion'?: string;
    /**
    * Check run log results.
    */
    'jobLog'?: Array<string>;
    /**
    * Assets generated from the check run.
    */
    'jobAssets'?: Array<string>;
    'traceSummary'?: object;
    /**
    * List of pages used on the check run.
    */
    'pages'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "number"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "number"
        },
        {
            "name": "runtimeVersion",
            "baseName": "runtimeVersion",
            "type": "string"
        },
        {
            "name": "jobLog",
            "baseName": "jobLog",
            "type": "Array<string>"
        },
        {
            "name": "jobAssets",
            "baseName": "jobAssets",
            "type": "Array<string>"
        },
        {
            "name": "traceSummary",
            "baseName": "traceSummary",
            "type": "object"
        },
        {
            "name": "pages",
            "baseName": "pages",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return CheckResultBrowser.attributeTypeMap;
    }
}

