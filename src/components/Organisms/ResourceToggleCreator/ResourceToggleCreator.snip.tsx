import React, { FC } from 'react'
import { ResourceType } from './ResourceToggleCreator.types'
import ResourceToggleCreator, { getResourceStatus, getResourceStatusTag } from './ResourceToggleCreator'

const i18n = {
    add: 'add',
    addContent: 'addContent',
    editContent: 'editContent',
    viewContent: 'viewContent',
    cancel: 'cancel',
    close: 'close',
    compactView: 'compactView',
    content: 'content',
    default: 'default',
    duration: 'duration',
    edit: 'edit',
    fullView: 'fullView',
    href: 'href',
    name: 'name',
    placeholder: 'placeholder',
    requiredField: (field: string) => `Required filed: ${field}`,
    timeToLive: 'timeToLive',
    unit: 'unit',
    update: 'update',
    view: 'view',
}

const resources: ResourceType[] = [
    {
        content: '',
        href: 'resource-01',
        status: 'DONE',
        timeToLive: '0',
        resourceUpdated: {
            auditContext: {
                correlationId: 'correlationId',
                owner: 'owner',
            },
            content: 'Content',
            status: 'OK',
            resourceId: {
                deviceId: 'deviceId',
                href: 'resource-01',
            },
        },
    },
    {
        content: '',
        href: 'resource-02',
        status: 'DONE',
        timeToLive: '0',
        resourceUpdated: {
            auditContext: {
                correlationId: 'correlationId',
                owner: 'owner',
            },
            content: 'Content',
            status: 'CANCELED',
            resourceId: {
                deviceId: 'deviceId',
                href: 'resource-02',
            },
        },
    },
    {
        content: '',
        href: 'resource-03',
        status: 'DONE',
        timeToLive: '0',
        resourceUpdated: {
            auditContext: {
                correlationId: 'correlationId',
                owner: 'owner',
            },
            content: 'Content',
            status: 'ERROR',
            resourceId: {
                deviceId: 'deviceId',
                href: 'resource-03',
            },
        },
    },
    {
        content: '',
        href: 'resource-04',
        status: 'TIMEOUT',
        timeToLive: '0',
        resourceUpdated: {
            auditContext: {
                correlationId: 'correlationId',
                owner: 'owner',
            },
            content: 'Content',
            status: 'OK',
            resourceId: {
                deviceId: 'deviceId',
                href: 'resource-04',
            },
        },
    },
    {
        content: '',
        href: 'resource-05',
        status: 'PENDING',
        timeToLive: '0',
        resourceUpdated: {
            auditContext: {
                correlationId: 'correlationId',
                owner: 'owner',
            },
            content: 'Content',
            status: 'OK',
            resourceId: {
                deviceId: 'deviceId',
                href: 'resource-05',
            },
        },
    },
]

const ResourceToggleCreatorSnip: FC<any> = () => {
    return (
        <div
            style={{
                margin: '50px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}
        >
            {resources.map((resource, key) => (
                <ResourceToggleCreator
                    defaultOpen
                    isTest
                    readOnly
                    i18n={i18n}
                    key={resource.href}
                    onCancelPending={getResourceStatus(resource) === 'PENDING' ? (resource) => console.log(resource) : undefined}
                    resourceData={resource}
                    statusTag={getResourceStatusTag(resource)}
                />
            ))}
        </div>
    )
}

ResourceToggleCreatorSnip.displayName = 'ResourceToggleCreatorSnip'

export default ResourceToggleCreatorSnip
