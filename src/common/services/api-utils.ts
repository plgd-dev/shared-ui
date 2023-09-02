import { clientAppSettings } from './client-app-settings'
import { security } from './security'
import { WellKnownConfigType } from '../hooks'
import jwtDecode from 'jwt-decode'
import get from 'lodash/get'

export const getWellKnowConfig = (): WellKnownConfigType => clientAppSettings.getWellKnowConfig() || security.getWellKnowConfig()

export const hasDifferentOwner = () => {
    const accessToken = security.getAccessToken()
    const wellKnownConfig = getWellKnowConfig()

    if (accessToken && wellKnownConfig) {
        const parsedData = jwtDecode(accessToken)
        const ownerId = get(parsedData, wellKnownConfig?.remoteProvisioning?.jwtOwnerClaim as string, '')

        console.group('hasDifferentOwner')
        console.log(ownerId)
        console.log(wellKnownConfig?.owner)
        console.groupEnd()

        if (ownerId !== wellKnownConfig?.owner) {
            return true
        }
    }

    return false
}
