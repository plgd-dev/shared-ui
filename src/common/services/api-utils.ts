import jwtDecode from 'jwt-decode'
import get from 'lodash/get'
import { v5 as uuidv5 } from 'uuid'
import chunk from 'lodash/chunk'

import { clientAppSettings } from './client-app-settings'
import { security } from './security'
import { DEVICE_AUTH_MODE } from '../../app/clientApp/constants'
import { getWellKnownConfig } from '../../app/clientApp/utils'
import { checkIfValidUUID } from '../utils'
import { withTelemetry } from './opentelemetry'
import { fetchApi } from './fetch-api'

export const hasDifferentOwner = (wellKnownConfig = getWellKnownConfig(), clientData = clientAppSettings.getClientData(), modeCheck = false) => {
    if (!wellKnownConfig || !wellKnownConfig?.isInitialized || !clientData) {
        return false
    }

    if (wellKnownConfig?.deviceAuthenticationMode !== clientData.deviceAuthenticationMode && modeCheck) {
        return true
    }

    if (wellKnownConfig?.deviceAuthenticationMode === DEVICE_AUTH_MODE.PRE_SHARED_KEY) {
        if (clientData.preSharedSubjectId && wellKnownConfig.owner !== clientData.preSharedSubjectId) {
            return true
        }
    } else if (wellKnownConfig?.deviceAuthenticationMode === DEVICE_AUTH_MODE.X509) {
        const accessToken = security.getAccessToken()

        if (!accessToken) {
            return true
        }

        const parsedData = jwtDecode(accessToken)
        const ownerId = get(parsedData, wellKnownConfig?.remoteProvisioning?.jwtOwnerClaim as string, '')

        if (ownerId !== wellKnownConfig?.owner) {
            return true
        }
    }

    return false
}

type hubDataType = {
    authorization: {
        ownerClaim: string
    }
}

export const isYourId = (uuid: string, hubsData: any) => {
    const accessToken = security.getAccessToken()

    if (accessToken && hubsData) {
        const parsedData: any = jwtDecode(accessToken)
        let match = false

        if (Array.isArray(hubsData)) {
            hubsData.forEach((hub: hubDataType) => {
                if (
                    (checkIfValidUUID(uuid) && uuid === parsedData[hub.authorization.ownerClaim]) ||
                    uuid === uuidv5(parsedData[hub.authorization.ownerClaim], uuidv5.URL)
                ) {
                    match = true
                }
            })
        }

        return match
    }

    return false
}

export const isOwnerId = (uuid: string, owner: string) => (checkIfValidUUID(uuid) && uuid === owner) || uuidv5(owner, uuidv5.URL) === uuid

export const getOwnerId = (jwtOwnerClaim: string) => {
    const accessToken = security.getAccessToken()

    if (accessToken) {
        const parsedData: any = jwtDecode(accessToken)
        return get(parsedData, jwtOwnerClaim as string, '')
    }

    return ''
}

export const deleteByChunks = (
    url: string,
    ids: string[],
    cancelRequestDeadlineTimeout: string,
    telemetrySpan: string,
    filterName = 'idFilter',
    customFilter = '',
    chunkSize = 50
) => {
    // We split the fetch into multiple chunks due to the URL being too long for the browser to handle
    const chunks = chunk(ids, chunkSize)
    return Promise.all(
        chunks.map((ids) => {
            const idsString = ids.map((id) => `${filterName}=${id}`).join('&')
            return withTelemetry(
                () =>
                    fetchApi(`${url}?${idsString}${customFilter}`, {
                        method: 'DELETE',
                        cancelRequestDeadlineTimeout,
                    }),
                telemetrySpan
            )
        })
    )
}
