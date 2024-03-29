import jwtDecode from 'jwt-decode'
import get from 'lodash/get'
import { v5 as uuidv5 } from 'uuid'

import { clientAppSettings } from './client-app-settings'
import { security } from './security'
import { DEVICE_AUTH_MODE } from '../../app/clientApp/constants'
import { getWellKnowConfig } from '../../app/clientApp/utils'
import { checkIfValidUUID } from '../utils'

export const hasDifferentOwner = (wellKnownConfig = getWellKnowConfig(), clientData = clientAppSettings.getClientData(), modeCheck = false) => {
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
