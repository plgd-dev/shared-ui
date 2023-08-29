import { clientAppSettings, security } from '../../common/services'
import { WellKnownConfigType } from '../../common/hooks'

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

export const getWebOAuthConfig = () => clientAppSettings.getWebOAuthConfig() || security.getWebOAuthConfig()

export const getClientUrl = (clientUrl: string) => (clientUrl.endsWith('/') ? clientUrl.slice(0, -1) : clientUrl)
