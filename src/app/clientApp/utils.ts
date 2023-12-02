import { clientAppSettings, security } from '../../common/services'
import { WellKnownConfigType } from '../../common/hooks'
import isEmpty from 'lodash/isEmpty'

type SecurityConfig = {
    httpGatewayAddress: string
    authority: string
}

export const getWellKnowConfig = (): WellKnownConfigType => clientAppSettings.getWellKnowConfig() || security.getWellKnowConfig()

export const getHttpGatewayAddress = () => {
    const getConfig = () => security.getGeneralConfig() as SecurityConfig
    const getClientAppConfig = () => clientAppSettings.getGeneralConfig() as SecurityConfig

    return getClientAppConfig().httpGatewayAddress || getConfig().httpGatewayAddress
}

export const getWebOAuthConfig = () => {
    const clientAppConfig = clientAppSettings.getWebOAuthConfig()
    return isEmpty(clientAppConfig) ? security.getWebOAuthConfig() : clientAppConfig
}

export const getClientUrl = (clientUrl: string) => (clientUrl.endsWith('/') ? clientUrl.slice(0, -1) : clientUrl)

export const getUseToken = () => clientAppSettings.getUseToken() ?? true
