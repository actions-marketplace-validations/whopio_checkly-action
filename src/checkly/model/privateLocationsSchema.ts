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
import { CheckAssignment } from './checkAssignment';
import { GroupAssignment } from './groupAssignment';
import { PrivateLocationKeys } from './privateLocationKeys';

export class PrivateLocationsSchema {
    'id': string;
    /**
    * The name assigned to the private location.
    */
    'name': string;
    /**
    * Valid slug name.
    */
    'slugName': string;
    /**
    * The private location icon.
    */
    'icon'?: string;
    'createdAt': string;
    'updatedAt'?: string;
    /**
    * The check this private location has assigned.
    */
    'checkAssignments'?: Array<CheckAssignment>;
    /**
    * The group this private location has assigned.
    */
    'groupAssignments'?: Array<GroupAssignment>;
    'keys'?: Array<PrivateLocationKeys>;
    'lastSeen'?: string;
    'agentCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "slugName",
            "baseName": "slugName",
            "type": "string"
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        },
        {
            "name": "checkAssignments",
            "baseName": "checkAssignments",
            "type": "Array<CheckAssignment>"
        },
        {
            "name": "groupAssignments",
            "baseName": "groupAssignments",
            "type": "Array<GroupAssignment>"
        },
        {
            "name": "keys",
            "baseName": "keys",
            "type": "Array<PrivateLocationKeys>"
        },
        {
            "name": "lastSeen",
            "baseName": "lastSeen",
            "type": "string"
        },
        {
            "name": "agentCount",
            "baseName": "agentCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PrivateLocationsSchema.attributeTypeMap;
    }
}

