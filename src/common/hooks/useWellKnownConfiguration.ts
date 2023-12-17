import { useEffect, useState } from 'react'
import isFunction from 'lodash/isFunction'
import mergeWith from 'lodash/mergeWith'
import cloneDeep from 'lodash/cloneDeep'

import { fetchApi } from '../services'
import { MenuItemVisibilityType } from '../../components/Layout/LeftPanel/LeftPanel.types'

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
    ui: {
        menu: {
            [key: string]: MenuItemVisibilityType
        }
    }
} & BuildInformationType

type useWellKnownConfigurationReturnType = [
    wellKnownConfig: WellKnownConfigType | undefined,
    updateWellKnowConfig: (newConfig: WellKnownConfigType, mode?: string) => void,
    reFetchConfig: () => Promise<WellKnownConfigType>,
    error: Error | undefined,
]

export const WellKnownConfigurationState = {
    UNUSED: 'UNUSED',
    REQUESTED: 'REQUESTED',
    RECEIVED: 'RECEIVED',
    MERGED: 'MERGED',
}

export const mergeConfig = (configOrigin: WellKnownConfigType, userWellKnowConfig: any): any => {
    const finalObject = cloneDeep(configOrigin)

    if (!userWellKnowConfig) {
        return configOrigin
    }

    return {
        ...finalObject,
        remoteProvisioning: {
            ...finalObject.remoteProvisioning,
            webOauthClient: {
                ...finalObject.remoteProvisioning?.webOauthClient,
                audience: userWellKnowConfig.audience ?? finalObject?.remoteProvisioning?.webOauthClient?.audience,
                clientId: userWellKnowConfig.clientId ?? finalObject?.remoteProvisioning?.webOauthClient?.clientId,
                scopes: userWellKnowConfig.scopes ?? finalObject?.remoteProvisioning?.webOauthClient?.scopes,
            },
            authority: userWellKnowConfig.authority ?? finalObject?.remoteProvisioning?.authority,
            certificateAuthority: userWellKnowConfig.certificateAuthority ?? finalObject?.remoteProvisioning?.certificateAuthority,
        },
        deviceAuthenticationMode: userWellKnowConfig.deviceAuthenticationMode ?? finalObject.deviceAuthenticationMode,
        preSharedKey: userWellKnowConfig.preSharedKey ?? undefined,
        owner: userWellKnowConfig.preSharedSubjectId ?? finalObject.owner,
    }
}

export type OptionsType = {
    defaultRemoteProvisioningData?: RemoteProvisioningDataType
    onConfigurationChange?: (newConfig: WellKnownConfigType) => void
    onError?: (e: any) => void
    onSuccess?: (newConfig: WellKnownConfigType) => void
}

export function useWellKnownConfiguration(url: string, options?: OptionsType): useWellKnownConfigurationReturnType {
    const { defaultRemoteProvisioningData, onConfigurationChange, onError, onSuccess } = options as OptionsType
    const [wellKnownConfig, setWellKnownConfig] = useState<WellKnownConfigType | undefined>(undefined)
    const [error, setError] = useState<Error | undefined>(undefined)

    const fetchConfig = async () => {
        try {
            return await fetchApi(`${url}/.well-known/configuration`, {
                useToken: false,
            }).then((result) => {
                let data = result.data

                if (defaultRemoteProvisioningData) {
                    data.remoteProvisioning = mergeWith(data.remoteProvisioning, defaultRemoteProvisioningData)
                }

                setWellKnownConfig(data)

                isFunction(onSuccess) && onSuccess(data)

                return data
            })
        } catch (e) {
            setError(new Error('Could not retrieve the well-known configuration.'))
            isFunction(onError) && onError(e)
        }
    }

    useEffect(() => {
        fetchConfig().then()
    }, []) // eslint-disable-line

    const updateWellKnowConfig = (newConfig: WellKnownConfigType, mode = 'set') => {
        const finalConfig = mode === 'set' ? newConfig : { ...wellKnownConfig, ...newConfig }
        setWellKnownConfig(finalConfig)

        isFunction(onConfigurationChange) && onConfigurationChange(finalConfig)
    }

    const reFetchConfig = async () => await fetchConfig()

    return [wellKnownConfig, updateWellKnowConfig, reFetchConfig, error]
}
