import { useEffect, useState } from 'react'
import { fetchApi } from '../services'

export type BuildInformationType = {
    buildDate: string
    commitDate: string
    commitHash: string
    releaseUrl: string
    version: string
}

export type RemoteProvisioningDataType = {
    authorization: {
        audience: string
        authority: string
        clientId: string
        ownerClaim: string
        scopes: string[]
    }
    mode: string
    userAgent: {
        certificateAuthorityAddress: string
        csrChallengeStateExpiration: string
    }
}

export type WellKnownConfigType = {
    deviceAuthenticationMode: string
    isInitialized: boolean
    remoteProvisioning: RemoteProvisioningDataType
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

    const fetchConfig = async () => {
        try {
            return fetchApi(`${url}/.well-known/configuration`, {
                useToken: false,
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
