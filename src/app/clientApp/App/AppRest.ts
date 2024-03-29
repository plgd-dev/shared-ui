import { fetchApi } from '../../../common/services'
import { GITHUB_VERSION_URL } from '../constants'
import { getHttpGatewayAddress } from '../utils'

export const getAppWellKnownConfiguration = () => fetchApi(`${getHttpGatewayAddress()}/.well-known/configuration`)

export const getOpenIdConfiguration = (authority: string) => fetchApi(`${authority}/.well-known/openid-configuration`)

export const getJwksData = (url: string) => fetchApi(url)

export const initializeJwksData = (data: any) =>
    fetchApi(`${getHttpGatewayAddress()}/api/v1/initialize`, {
        method: 'POST',
        body: {
            jwks: data,
        },
        useToken: true,
    })

export const signIdentityCsr = (certificateAuthority: string, certificateSigningRequest: string) =>
    fetchApi(`${certificateAuthority}/api/v1/sign/identity-csr`, {
        method: 'POST',
        body: {
            certificateSigningRequest,
        },
        useToken: true,
    })

export const initializeFinal = (state: string, certificate: string) =>
    fetchApi(`${getHttpGatewayAddress()}/api/v1/initialize/${state}`, {
        method: 'POST',
        body: {
            certificate,
        },
        useToken: true,
    })

export const reset = (url = getHttpGatewayAddress(), unauthorizedCallback?: () => void) =>
    fetchApi(`${url}/api/v1/reset`, {
        method: 'POST',
        body: {},
        useToken: true,
        unauthorizedCallback,
    })

export const initializedByPreShared = (subjectId: string, key: string) =>
    fetchApi(`${getHttpGatewayAddress()}/api/v1/initialize`, {
        method: 'POST',
        useToken: false,
        body: {
            preSharedKey: {
                subjectId,
                key,
            },
        },
    })

export const getVersionNumberFromGithub = (githubVersionUrl?: string) => fetchApi(githubVersionUrl || GITHUB_VERSION_URL, { useToken: false })

export const getParentAppWellKnownConfiguration = (wellKnowConfigUrl: string) =>
    fetchApi(`${wellKnowConfigUrl}/.well-known/configuration`, {
        useToken: false,
        cancelRequestDeadlineTimeout: 10000,
    })

export const getTheme = (url: string) =>
    fetchApi(`${url}/theme/theme.json`, {
        useToken: false,
    })
