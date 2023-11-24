import jwtDecode from 'jwt-decode'
import get from 'lodash/get'

import { clientAppSettings } from './client-app-settings'
import { security } from './security'
import { DEVICE_AUTH_MODE } from '../../app/clientApp/constants'
import { getWellKnowConfig } from '../../app/clientApp/utils'

export const hasDifferentOwner = (wellKnownConfig = getWellKnowConfig(), clientData = clientAppSettings.getClientData(), modeCheck = false) => {
    if (!wellKnownConfig || !wellKnownConfig?.isInitialized || !clientData) {
        return false
    }

    if (wellKnownConfig?.deviceAuthenticationMode !== clientData.authenticationMode && modeCheck) {
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
