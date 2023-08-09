import { useEffect, useState } from 'react'
import { fetchApi } from '../services'
import isFunction from 'lodash/isFunction'
import { cloneDeep } from 'lodash'

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
    buildInfo: {
        buildDate: string
        commitDate: string
        commitHash: string
        releaseUrl: string
        version: string
    }
} & BuildInformationType

type useWellKnownConfigurationReturnType = [
    wellKnownConfig: WellKnownConfigType | undefined,
    updateWellKnowConfig: (newConfig: WellKnownConfigType) => void,
    reFetchConfig: () => void,
    error: Error | undefined
]

export const WellKnownConfigurationState = {
    UNUSED: 'UNUSED',
    REQUESTED: 'REQUESTED',
    RECEIVED: 'RECEIVED',
    MERGED: 'MERGED',
}

export const mergeConfig = (configOrigin: RemoteProvisioningDataType, configNew: RemoteProvisioningDataType) => {
    const finalObject = cloneDeep(configOrigin)
    Object.keys(configNew).forEach((key) => {
        if (configOrigin.hasOwnProperty(key)) {
            // @ts-ignore
            finalObject[key] = configNew[key]
        }
    })

    return finalObject
}

export function useWellKnownConfiguration(
    url: string,
    defaultRemoteProvisioningData?: RemoteProvisioningDataType,
    onConfigurationChange?: () => void
): useWellKnownConfigurationReturnType {
    const [wellKnownConfig, setWellKnownConfig] = useState<WellKnownConfigType | undefined>(undefined)
    const [error, setError] = useState<Error | undefined>(undefined)

    const fetchConfig = async () => {
        try {
            return await fetchApi(`${url}/.well-known/configuration`, {
                useToken: false,
            }).then((result) => {
                let data = result.data

                if (defaultRemoteProvisioningData) {
                    data.remoteProvisioning = mergeConfig(data.remoteProvisioning, defaultRemoteProvisioningData)
                }

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

    const updateWellKnowConfig = (newConfig: WellKnownConfigType) => {
        setWellKnownConfig(newConfig)
        isFunction(onConfigurationChange) && onConfigurationChange()
    }

    const reFetchConfig = async () => await fetchConfig()

    return [wellKnownConfig, updateWellKnowConfig, reFetchConfig, error]
}
