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
import { CheckGroupAPICheckDefaults } from './checkGroupAPICheckDefaults';
import { CheckGroupAlertSettings } from './checkGroupAlertSettings';
import { EnvironmentVariable } from './environmentVariable';
import { Model1 } from './model1';

export class CheckGroup {
    'id'?: number;
    /**
    * The name of the check group.
    */
    'name': string;
    /**
    * Determines if the checks in the  group are running or not.
    */
    'activated': boolean;
    /**
    * Determines if any notifications will be send out when a check in this group fails and/or recovers.
    */
    'muted'?: boolean;
    /**
    * Tags for organizing and filtering checks.
    */
    'tags'?: Array<string>;
    /**
    * An array of one or more data center locations where to run the checks.
    */
    'locations'?: Array<CheckGroup.LocationsEnum>;
    /**
    * Determines how many checks are invoked concurrently when triggering a check group from CI/CD or through the API.
    */
    'concurrency': number = 3;
    'apiCheckDefaults': CheckGroupAPICheckDefaults;
    'browserCheckDefaults': object;
    'environmentVariables'?: Array<EnvironmentVariable>;
    /**
    * Setting this to \"true\" will trigger a retry when a check fails from the failing region and another, randomly selected region before marking the check as failed.
    */
    'doubleCheck'?: boolean;
    /**
    * When true, the account level alert setting will be used, not the alert setting defined on this check group.
    */
    'useGlobalAlertSettings'?: boolean;
    'alertSettings'?: CheckGroupAlertSettings;
    /**
    * List of alert channel subscriptions.
    */
    'alertChannelSubscriptions'?: Array<Model1>;
    /**
    * An ID reference to a snippet to use in the setup phase of an API check in this group.
    */
    'setupSnippetId'?: number;
    /**
    * An ID reference to a snippet to use in the teardown phase of an API check in this group.
    */
    'tearDownSnippetId'?: number;
    /**
    * A valid piece of Node.js code to run in the setup phase of an API check in this group.
    */
    'localSetupScript'?: string;
    /**
    * A valid piece of Node.js code to run in the teardown phase of an API check in this group.
    */
    'localTearDownScript'?: string;
    /**
    * The runtime version, i.e. fixed set of runtime dependencies, used to execute checks in this group.
    */
    'runtimeId'?: CheckGroup.RuntimeIdEnum;
    /**
    * An array of one or more private locations where to run the check.
    */
    'privateLocations'?: Array<string>;
    'createdAt'?: string;
    'updatedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "activated",
            "baseName": "activated",
            "type": "boolean"
        },
        {
            "name": "muted",
            "baseName": "muted",
            "type": "boolean"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "locations",
            "baseName": "locations",
            "type": "Array<CheckGroup.LocationsEnum>"
        },
        {
            "name": "concurrency",
            "baseName": "concurrency",
            "type": "number"
        },
        {
            "name": "apiCheckDefaults",
            "baseName": "apiCheckDefaults",
            "type": "CheckGroupAPICheckDefaults"
        },
        {
            "name": "browserCheckDefaults",
            "baseName": "browserCheckDefaults",
            "type": "object"
        },
        {
            "name": "environmentVariables",
            "baseName": "environmentVariables",
            "type": "Array<EnvironmentVariable>"
        },
        {
            "name": "doubleCheck",
            "baseName": "doubleCheck",
            "type": "boolean"
        },
        {
            "name": "useGlobalAlertSettings",
            "baseName": "useGlobalAlertSettings",
            "type": "boolean"
        },
        {
            "name": "alertSettings",
            "baseName": "alertSettings",
            "type": "CheckGroupAlertSettings"
        },
        {
            "name": "alertChannelSubscriptions",
            "baseName": "alertChannelSubscriptions",
            "type": "Array<Model1>"
        },
        {
            "name": "setupSnippetId",
            "baseName": "setupSnippetId",
            "type": "number"
        },
        {
            "name": "tearDownSnippetId",
            "baseName": "tearDownSnippetId",
            "type": "number"
        },
        {
            "name": "localSetupScript",
            "baseName": "localSetupScript",
            "type": "string"
        },
        {
            "name": "localTearDownScript",
            "baseName": "localTearDownScript",
            "type": "string"
        },
        {
            "name": "runtimeId",
            "baseName": "runtimeId",
            "type": "CheckGroup.RuntimeIdEnum"
        },
        {
            "name": "privateLocations",
            "baseName": "privateLocations",
            "type": "Array<string>"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return CheckGroup.attributeTypeMap;
    }
}

export namespace CheckGroup {
    export enum LocationsEnum {
        UsEast1 = <any> 'us-east-1',
        UsEast2 = <any> 'us-east-2',
        UsWest1 = <any> 'us-west-1',
        UsWest2 = <any> 'us-west-2',
        CaCentral1 = <any> 'ca-central-1',
        SaEast1 = <any> 'sa-east-1',
        EuWest1 = <any> 'eu-west-1',
        EuCentral1 = <any> 'eu-central-1',
        EuWest2 = <any> 'eu-west-2',
        EuWest3 = <any> 'eu-west-3',
        EuNorth1 = <any> 'eu-north-1',
        EuSouth1 = <any> 'eu-south-1',
        MeSouth1 = <any> 'me-south-1',
        ApSoutheast1 = <any> 'ap-southeast-1',
        ApNortheast1 = <any> 'ap-northeast-1',
        ApEast1 = <any> 'ap-east-1',
        ApSoutheast2 = <any> 'ap-southeast-2',
        ApSoutheast3 = <any> 'ap-southeast-3',
        ApNortheast2 = <any> 'ap-northeast-2',
        ApNortheast3 = <any> 'ap-northeast-3',
        ApSouth1 = <any> 'ap-south-1',
        AfSouth1 = <any> 'af-south-1'
    }
    export enum RuntimeIdEnum {
        _202202 = <any> '2022.02',
        _202110 = <any> '2021.10',
        _202106 = <any> '2021.06',
        _202001 = <any> '2020.01'
    }
}
