import { useContext, useEffect, useMemo, useState } from 'react'
import debounce from 'lodash/debounce'
import { useSelector } from 'react-redux'

import { useStreamApi, useEmitter, WellKnownConfigType, useIsMounted, getData } from '../../../common/hooks'
import { getDevicesDiscoveryTimeout } from './slice'
import { devicesApiEndpoints, DEVICES_STATUS_WS_KEY, resourceEventTypes, DEVICE_PROVISION_STATUS_DELAY_MS } from './constants'
import { getOnboardingEndpoint, getResourceRegistrationNotificationKey, hasOnboardingFeature, loadResourceData } from './utils'
import { ResourcesType, StreamApiPropsType } from './Devices.types'
import AppContext from '../../share/AppContext'
import { getHttpGatewayAddress } from '../utils'
import { streamApi } from '../../../common/services'

export type UseApiReturnType = {
    data: any
    error: any
    loading: boolean
    refresh: () => void
    setState: (data: any) => void
    updateData: (data: any) => void
}

export type UseDevicesListCacheReturnType = UseApiReturnType & {
    discovery: () => void
}

export const useDevicesList = (requestActive = true): UseApiReturnType => {
    const discoveryTimeout = useSelector(getDevicesDiscoveryTimeout)
    const { unauthorizedCallback } = useContext(AppContext)
    const httpGatewayAddress = getHttpGatewayAddress()

    // Fetch the data
    const { data, updateData, ...rest } = useStreamApi(`${httpGatewayAddress}${devicesApiEndpoints.DEVICES}?timeout=${discoveryTimeout}`, {
        unauthorizedCallback,
        requestActive,
    })

    // Update the metadata when a WS event is emitted
    // useEmitter(DEVICES_STATUS_WS_KEY, (newDeviceStatus) => {
    //     if (data) {
    //         // Update the data with the current device status and shadowSynchronization
    //         updateData(updateDevicesDataStatus(data, newDeviceStatus))
    //     }
    // })

    return { data, updateData, ...rest }
}

export const useDevicesListCache = (requestActive: boolean): UseDevicesListCacheReturnType => {
    const discoveryTimeout = useSelector(getDevicesDiscoveryTimeout)
    const { unauthorizedCallback } = useContext(AppContext)
    const httpGatewayAddress = getHttpGatewayAddress()
    const isMounted = useIsMounted()

    const [state, setState] = useState<{ error: any; loading: boolean; data: any }>({
        error: null,
        loading: requestActive,
        data: null,
    })

    const [refreshIndex, setRefreshIndex] = useState(0)
    const urlBase = `${httpGatewayAddress}${devicesApiEndpoints.DEVICES}`

    const requestData = async (active: boolean, useCache: boolean) => {
        if (active) {
            // Set loading to true
            setState({ ...state, loading: true })
            let data = []

            if (useCache) {
                // cache mode
                data = await getData(streamApi, `${urlBase}?useCache=true`, {
                    unauthorizedCallback,
                    requestActive: true,
                })
            }

            if (data.length === 0) {
                // discovery mode
                data = await getData(streamApi, `${urlBase}?timeout=${discoveryTimeout}`, {
                    unauthorizedCallback,
                    requestActive: true,
                })
            }

            if (isMounted.current) {
                setState({
                    ...state,
                    data,
                    error: null,
                    loading: false,
                })
            }
        }
    }

    useEffect(
        () => {
            ;(async () => {
                try {
                    await requestData(requestActive, refreshIndex >= 0)
                } catch (error) {
                    if (isMounted.current) {
                        setState({
                            ...state,
                            data: null,
                            error,
                            loading: false,
                        })
                    }
                }
            })()
        },
        [refreshIndex, requestActive] // eslint-disable-line
    )

    return {
        ...state,
        updateData: (updatedData) => {
            setState((prevState) => ({ ...prevState, data: updatedData }))
        },
        refresh: () => setRefreshIndex(Math.abs(Math.random())),
        discovery: () => setRefreshIndex(Math.random() * -1),
        setState,
    }
}

export const useDeviceDetails = (deviceId: string, emitter = true) => {
    const { unauthorizedCallback } = useContext(AppContext)
    const httpGatewayAddress = getHttpGatewayAddress()

    const { data, updateData, ...rest }: StreamApiPropsType = useStreamApi(`${httpGatewayAddress}${devicesApiEndpoints.DEVICES}/${deviceId}`, {
        streamApi: false,
        unauthorizedCallback,
    })

    // Update the metadata when a WS event is emitted
    useEmitter(
        `${DEVICES_STATUS_WS_KEY}.${deviceId}`,
        debounce(({ status, shadowSynchronization }) => {
            if (data && emitter) {
                updateData({
                    ...data,
                    metadata: {
                        ...data.metadata,
                        shadowSynchronization,
                        status: {
                            ...data.metadata?.status,
                            value: status,
                        },
                    },
                })
            }
        }, 300)
    )

    return { data, updateData, ...rest }
}

export const useDevicesResources = (deviceId: string) => {
    const { unauthorizedCallback } = useContext(AppContext)
    const httpGatewayAddress = getHttpGatewayAddress()

    const { data, updateData, ...rest }: StreamApiPropsType = useStreamApi(
        `${httpGatewayAddress}${devicesApiEndpoints.DEVICES}/${deviceId}/${devicesApiEndpoints.DEVICES_RESOURCES_SUFFIX}`,
        { parseResult: 'json', unauthorizedCallback }
    )

    useEmitter(getResourceRegistrationNotificationKey(deviceId), ({ event, resources: updatedResources }: { event: any; resources: any }) => {
        if (data?.resources) {
            const resources = data.resources // get the first set of resources from an array, since it came from a stream of data
            let updatedLinks: any = []

            updatedResources.forEach((resource: any) => {
                if (event === resourceEventTypes.ADDED) {
                    const linkExists = resources.findIndex((link: any) => link.href === resource.href) !== -1
                    if (linkExists) {
                        // Already exists, update
                        updatedLinks = resources.map((link: any) => (link.href === resource.href ? resource : link))
                    } else {
                        updatedLinks = resources.concat(resource)
                    }
                } else {
                    updatedLinks = resources.filter((link: any) => link.href !== resource.href)
                }
            })

            updateData([{ ...data, resources: updatedLinks }])
        }
    })

    return { data, updateData, ...rest }
}

export type useOnboardingButtonProps = {
    deviceId: string
    isOwned: boolean
    resources: ResourcesType[]
    wellKnowConfig?: WellKnownConfigType
    isUnsupported: boolean
}

export function useOnboardingButton({ resources, isOwned, deviceId, isUnsupported }: useOnboardingButtonProps) {
    const [onboardResourceLoading, setOnboardResourceLoading] = useState(false)
    const [deviceOnboardingResourceData, setDeviceOnboardingResourceData] = useState<any>(undefined)

    const deviceOnboardingEndpoint = useMemo(() => getOnboardingEndpoint(resources), [resources])
    const incompleteOnboardingData = !hasOnboardingFeature()

    useEffect(() => {
        if (deviceOnboardingEndpoint && (isOwned || isUnsupported)) {
            setOnboardResourceLoading(true)
            setTimeout(() => fetchDeviceOnboardingData(), DEVICE_PROVISION_STATUS_DELAY_MS)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deviceOnboardingEndpoint, isOwned])

    const refetchDeviceOnboardingData = () => fetchDeviceOnboardingData()

    const fetchDeviceOnboardingData = () => {
        if (deviceOnboardingEndpoint && (isOwned || isUnsupported)) {
            loadResourceData({
                href: deviceOnboardingEndpoint.href,
                deviceId,
                errorCallback: () => {
                    setOnboardResourceLoading(false)
                },
            }).then((rData) => {
                setDeviceOnboardingResourceData(rData)
                setOnboardResourceLoading(false)
            })
        }
    }

    // incompleteOnboardingData - show modal after click on button ( data are incomplete )
    // onboardResourceLoading - loading resource data
    // deviceOnboardingResourceData - device resource data -> onboard / offboard
    // refetchDeviceOnboardingData
    return [incompleteOnboardingData, onboardResourceLoading, deviceOnboardingResourceData, refetchDeviceOnboardingData]
}
