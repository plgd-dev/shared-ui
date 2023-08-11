import { clientAppSetings, security } from '../../common/services'
import { WellKnownConfigType } from '../../common/hooks'

type SecurityConfig = {
    httpGatewayAddress: string
    authority: string
}

export const getWellKnowConfig = (): WellKnownConfigType => clientAppSetings.getWellKnowConfig() || security.getWellKnowConfig()

export const getHttpGatewayAddress = () => {
    const getConfig = () => security.getGeneralConfig() as SecurityConfig
    const getClientAppConfig = () => clientAppSetings.getGeneralConfig() as SecurityConfig

    return getClientAppConfig().httpGatewayAddress || getConfig().httpGatewayAddress
}

export const getWebOAuthConfig = () => clientAppSetings.getWebOAuthConfig() || security.getWebOAuthConfig()
