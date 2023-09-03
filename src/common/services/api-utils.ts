import { clientAppSettings } from './client-app-settings'
import { security } from './security'
import jwtDecode from 'jwt-decode'
import get from 'lodash/get'
import { DEVICE_AUTH_MODE } from '../../app/clientApp/constants'
import { getWellKnowConfig } from '../../app/clientApp/utils'

export const hasDifferentOwner = (wellKnownConfig = getWellKnowConfig(), clientData = clientAppSettings.getClientData()) => {
    if (!wellKnownConfig || !wellKnownConfig?.isInitialized) {
        return false
    }

    if (wellKnownConfig?.deviceAuthenticationMode === DEVICE_AUTH_MODE.PRE_SHARED_KEY) {
        if (clientData && clientData.preSharedSubjectId && wellKnownConfig.owner !== clientData.preSharedSubjectId) {
            return true
        }
    } else if (wellKnownConfig?.deviceAuthenticationMode === DEVICE_AUTH_MODE.X509) {
        const accessToken = security.getAccessToken()
        const parsedData = jwtDecode(accessToken)
        const ownerId = get(parsedData, wellKnownConfig?.remoteProvisioning?.jwtOwnerClaim as string, '')

        if (ownerId !== wellKnownConfig?.owner) {
            return true
        }
    }

    return false
}
