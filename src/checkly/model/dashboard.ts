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

export class Dashboard {
    /**
    * A custom user domain, e.g. \"status.example.com\". See the docs on updating your DNS and SSL usage.
    */
    'customDomain'?: string;
    /**
    * A subdomain name under \"checklyhq.com\". Needs to be unique across all users.
    */
    'customUrl'?: string;
    /**
    * A URL pointing to an image file.
    */
    'logo'?: string;
    /**
    * A URL pointing to an image file used as dashboard favicon.
    */
    'favicon'?: string;
    /**
    * A URL link to redirect when dashboard logo is clicked on.
    */
    'link'?: string;
    /**
    * A piece of text displayed at the top of your dashboard.
    */
    'header'?: string;
    /**
    * A piece of text displayed below the header or title of your dashboard.
    */
    'description'?: string;
    /**
    * Determines whether to use the full screen or focus in the center.
    */
    'width'?: Dashboard.WidthEnum = Dashboard.WidthEnum.Full;
    /**
    * How often to refresh the dashboard in seconds.
    */
    'refreshRate'?: Dashboard.RefreshRateEnum = Dashboard.RefreshRateEnum.NUMBER_60;
    /**
    * Determines of pagination is on or off.
    */
    'paginate'?: boolean = true;
    /**
    * How often to trigger pagination in seconds.
    */
    'paginationRate'?: Dashboard.PaginationRateEnum = Dashboard.PaginationRateEnum.NUMBER_60;
    /**
    * Number of checks displayed per page.
    */
    'checksPerPage'?: number = 15;
    /**
    * When to use AND operator for tags lookup.
    */
    'useTagsAndOperator'?: boolean = false;
    /**
    * Show or hide the tags on the dashboard.
    */
    'hideTags'?: boolean = false;
    /**
    * A list of one or more tags that filter which checks to display on the dashboard.
    */
    'tags'?: Array<string>;
    'dashboardId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customDomain",
            "baseName": "customDomain",
            "type": "string"
        },
        {
            "name": "customUrl",
            "baseName": "customUrl",
            "type": "string"
        },
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string"
        },
        {
            "name": "favicon",
            "baseName": "favicon",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "string"
        },
        {
            "name": "header",
            "baseName": "header",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "Dashboard.WidthEnum"
        },
        {
            "name": "refreshRate",
            "baseName": "refreshRate",
            "type": "Dashboard.RefreshRateEnum"
        },
        {
            "name": "paginate",
            "baseName": "paginate",
            "type": "boolean"
        },
        {
            "name": "paginationRate",
            "baseName": "paginationRate",
            "type": "Dashboard.PaginationRateEnum"
        },
        {
            "name": "checksPerPage",
            "baseName": "checksPerPage",
            "type": "number"
        },
        {
            "name": "useTagsAndOperator",
            "baseName": "useTagsAndOperator",
            "type": "boolean"
        },
        {
            "name": "hideTags",
            "baseName": "hideTags",
            "type": "boolean"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "dashboardId",
            "baseName": "dashboardId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Dashboard.attributeTypeMap;
    }
}

export namespace Dashboard {
    export enum WidthEnum {
        Full = <any> 'FULL',
        _960Px = <any> '960PX'
    }
    export enum RefreshRateEnum {
        NUMBER_60 = <any> 60,
        NUMBER_300 = <any> 300,
        NUMBER_600 = <any> 600
    }
    export enum PaginationRateEnum {
        NUMBER_30 = <any> 30,
        NUMBER_60 = <any> 60,
        NUMBER_300 = <any> 300
    }
}
