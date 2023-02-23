import { useEffect } from 'react'

import { WebSocketEventClient } from './websocket-event-client'
import { eventFilters } from './websocket-event-constants'
import { deviceStatusListener } from '../../../../src/containers/Devices/websockets'

let initialized = false

export const InitServices = (deviceStatusListener) => {
    useEffect(() => {
        // Register the default WS instances
        WebSocketEventClient._connect()
        WebSocketEventClient.onOpen = () => {
            if (!initialized) {
                WebSocketEventClient.subscribe(
                    {
                        eventFilter: [eventFilters.DEVICE_METADATA_UPDATED, eventFilters.REGISTERED, eventFilters.UNREGISTERED],
                    },
                    'device-status',
                    deviceStatusListener.deviceStatusListener
                )
            }
            initialized = true
        }

        return () => {
            WebSocketEventClient.unsubscribe('device-status')
        }
    }, [])

    return null
}
