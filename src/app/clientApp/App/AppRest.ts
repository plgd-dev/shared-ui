import { fetchApi } from '../../../common/services'
import { GITHUB_VERSION_URL } from '../constants'
import { getHttpGatewayAddress } from '../utils'

export const getAppWellKnownConfiguration = () =>
    fetchApi(`${getHttpGatewayAddress()}/.well-known/configuration`, {
        useToken: false,
    })

export const getOpenIdConfiguration = (authority: string) =>
    fetchApi(`${authority}/.well-known/openid-configuration`, {
        useToken: false,
    })

export const getJwksData = (url: string) => fetchApi(url, { useToken: false })

export const initializeJwksData = (data: any) =>
    fetchApi(`${getHttpGatewayAddress()}/api/v1/initialize`, {
        method: 'POST',
        body: {
            jwks: data,
        },
    })

export const signIdentityCsr = (certificateAuthority: string, certificateSigningRequest: string) =>
    fetchApi(`${certificateAuthority}/api/v1/sign/identity-csr`, {
        method: 'POST',
        body: {
            certificateSigningRequest,
        },
    })

export const initializeFinal = (state: string, certificate: string) =>
    fetchApi(`${getHttpGatewayAddress()}/api/v1/initialize/${state}`, {
        method: 'POST',
        body: {
            certificate,
        },
    })

export const reset = (url = getHttpGatewayAddress(), unauthorizedCallback?: () => void) =>
    fetchApi(`${url}/api/v1/reset`, {
        method: 'POST',
        body: {},
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

export const getVersionNumberFromGithub = () => fetchApi(GITHUB_VERSION_URL, { useToken: false })

export const getParentAppWellKnownConfiguration = (wellKnowConfigUrl: string) =>
    fetchApi(`${wellKnowConfigUrl}/.well-known/configuration`, {
        useToken: false,
        cancelRequestDeadlineTimeout: 10000,
    })
