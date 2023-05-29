import { useEffect, useState } from 'react'
import { fetchApi, security } from "../services";
import { useAppConfig } from "../../../../src/containers/App";
import { SecurityConfig } from "../../../../src/containers/App/App.types";

export type BuildInformationType = {
    buildDate: string
    commitDate: string
    commitHash: string
    releaseUrl: string
    version: string
}

export type RemoteProvisioningDataType = {
    authority: string
    certificateAuthority: string
    coapGateway: string
    certificateAuthorities: string
    currentTime: number
    deviceOauthClient: {
        audience: string
        clientId: string
        providerName: string
        scopes: string[]
    }
    id: string
    jwtOwnerClaim: string
    webOauthClient: {
        audience: string
        clientId: string
        scopes: string[]
    }
    mode: string
    userAgent: {
        csrChallengeStateExpiration: string
    }
}

export type WellKnownConfigType = {
    deviceAuthenticationMode: string
    isInitialized: boolean
    remoteProvisioning?: RemoteProvisioningDataType
    owner?: string
} & BuildInformationType

type useWellKnownConfigurationReturnType = [
    wellKnownConfig: WellKnownConfigType | undefined,
    updateWellKnowConfig: (newConfig: WellKnownConfigType) => void,
    reFetchConfig: () => void,
    error: Error | undefined
]

export function useWellKnownConfiguration(url: string): useWellKnownConfigurationReturnType {
    const [wellKnownConfig, setWellKnownConfig] = useState<WellKnownConfigType | undefined>(undefined)
    const [error, setError] = useState<Error | undefined>(undefined)
    const { httpGatewayAddress, cancelRequestDeadlineTimeout } = security.getGeneralConfig() as SecurityConfig

    const fetchConfig = async () => {
        try {
            return await fetchApi(`${url}/.well-known/configuration`, {
                useToken: false,
                cancelRequestDeadlineTimeout
            }).then((result) => {
                const data = result.data
                setWellKnownConfig(data)
                return data
            })
        } catch (e) {
            setError(new Error('Could not retrieve the well-known configuration.'))
        }
    }

    useEffect(() => {
        fetchConfig().then()
    }, []) // eslint-disable-line

    const updateWellKnowConfig = (newConfig: WellKnownConfigType) => setWellKnownConfig(newConfig)

    const reFetchConfig = async () => await fetchConfig()

    return [wellKnownConfig, updateWellKnowConfig, reFetchConfig, error]
}
