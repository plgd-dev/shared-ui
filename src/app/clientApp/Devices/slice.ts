// This state holds information about devices.

import { createSlice } from '@reduxjs/toolkit'
import findIndex from 'lodash/findIndex'
import { devicesOwnerships, DISCOVERY_DEFAULT_TIMEOUT } from './constants'
import isEqual from 'lodash/isEqual'

const { OWNED } = devicesOwnerships

export type Store = {
    clientAppDevices: StoreType
}

export type StoreType = {
    activeNotifications: any
    devicesList: any
    discoveryTimeout: number
}

const initialState: StoreType = {
    activeNotifications: [],
    devicesList: [],
    discoveryTimeout: DISCOVERY_DEFAULT_TIMEOUT,
}

const { reducer, actions } = createSlice({
    name: 'client-app-devices',
    initialState,
    reducers: {
        setDevices(state, { payload }) {
            state.devicesList = payload
        },
        updateDevices(state, { payload }) {
            if (state.devicesList.length === 0) {
                state.devicesList = payload
            } else {
                payload.forEach((device: any) => {
                    const index = findIndex(state.devicesList, (d: any) => d.id === device.id)
                    if (index > -1) {
                        if (!isEqual(state.devicesList[index], device)) {
                            state.devicesList[index] = device
                        }
                    } else {
                        state.devicesList.push(device)
                    }
                })
            }
        },
        addDevice(state, { payload }) {
            const index = findIndex(state.devicesList, (device: any) => device.id === payload.id)

            if (index > -1) {
                if (!isEqual(state.devicesList[index], payload)) {
                    state.devicesList[index] = payload
                }
            } else {
                state.devicesList.push(payload)
            }
        },
        flushDevices(state) {
            state.devicesList = []
        },
        ownDevice(state, { payload }) {
            const index = findIndex(state.devicesList, (device: any) => device.id === payload)

            if (index > -1) {
                state.devicesList[index].ownershipStatus = OWNED
            }
        },
        disOwnDevice(state, { payload }) {
            state.devicesList.splice(
                state.devicesList.findIndex((device: any) => device.id === payload),
                1
            )
        },
        updateDevice(state, { payload }) {
            const { attribute, id, value } = payload
            const index = findIndex(state.devicesList, (device: any) => device.id === id)

            if (index > -1 && payload && value) {
                state.devicesList[index][attribute] = value
            }
        },
        setDiscoveryTimeout(state, { payload }) {
            state.discoveryTimeout = payload
        },
    },
})

// Actions
export const { setDevices, addDevice, flushDevices, ownDevice, disOwnDevice, updateDevice, updateDevices, setDiscoveryTimeout } = actions

// Reducer
export default reducer

export const isNotificationActive = (key: string) => (state: Store) => state.clientAppDevices.activeNotifications?.includes?.(key) || false

export const getDevices = (state: Store) => state.clientAppDevices.devicesList

export const getDevice = (state: Store, id: string) => {
    const index = findIndex(state.clientAppDevices.devicesList, (device: any) => device.id === id)

    return index > -1 ? state.clientAppDevices.devicesList[index] : undefined
}

export const getDevicesDiscoveryTimeout = (state: Store) => state.clientAppDevices.discoveryTimeout
