import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Props } from './DevicesResourcesModalNotifications.types'
import isFunction from 'lodash/isFunction'

// Components
import { WebSocketEventClient, eventFilters } from '../../../../common/services'
import { getResourceUpdateNotificationKey } from '../../../../common/utils'
import ModalStrippedLine from '../../../new/Modal/ModalStrippedLine'
import Switch from '../../../new/Switch'

const DevicesResourcesModalNotifications: FC<Props> = (props) => {
    const { deviceId, deviceName, deviceResourceUpdateListener, href, i18n, isNotificationActive, isUnregistered, toggleActiveNotification } = props
    const dispatch = useDispatch()
    const resourceUpdateObservationWSKey = getResourceUpdateNotificationKey(deviceId, href)
    const notificationsEnabled = useSelector(isNotificationActive(resourceUpdateObservationWSKey))

    useEffect(() => {
        if (isUnregistered) {
            // Unregister the WS when the device is unregistered
            WebSocketEventClient.unsubscribe(resourceUpdateObservationWSKey)
        }
    }, [isUnregistered, resourceUpdateObservationWSKey])

    const toggleNotifications = (e: any) => {
        if (e.target.checked) {
            // Request browser notifications
            // (browsers will explicitly disallow notification permission requests not triggered in response to a user gesture,
            // so we must call it to make sure the user has received a notification request)
            Notification?.requestPermission?.()

            // Register the WS
            WebSocketEventClient.subscribe(
                {
                    eventFilter: [eventFilters.RESOURCE_CHANGED],
                    resourceIdFilter: [`${deviceId}${href}`],
                },
                resourceUpdateObservationWSKey,
                deviceResourceUpdateListener({ deviceId, href, deviceName: deviceName || '' })
            )
        } else {
            WebSocketEventClient.unsubscribe(resourceUpdateObservationWSKey)
        }

        isFunction(toggleActiveNotification) && dispatch(toggleActiveNotification(resourceUpdateObservationWSKey))
    }

    return (
        <ModalStrippedLine
            component={
                <Switch
                    defaultChecked={notificationsEnabled}
                    label={notificationsEnabled ? i18n.on : i18n.off}
                    labelBefore={true}
                    onChange={toggleNotifications}
                    size='big'
                />
            }
            label={i18n.notifications}
        />
    )
}

DevicesResourcesModalNotifications.displayName = 'DevicesResourcesModalNotifications'

export default DevicesResourcesModalNotifications
