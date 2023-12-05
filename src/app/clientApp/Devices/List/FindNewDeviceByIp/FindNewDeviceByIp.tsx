import React, { FC, useEffect, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch } from 'react-redux'

import Button from '../../../../../components/Atomic/Button'
import Modal, { ModalFooter } from '../../../../../components/Atomic/Modal'
import Notification from '../../../../../components/Atomic/Notification/Toast'
import { convertSize, IconPlus } from '../../../../../components/Atomic/Icon'
import FormGroup from '../../../../../components/Atomic/FormGroup'
import FormLabel from '../../../../../components/Atomic/FormLabel'
import FormInput from '../../../../../components/Atomic/FormInput'
import { addDevice } from '../../slice'
import { useIsMounted } from '../../../../../common/hooks'
import { addDeviceByIp } from '../../rest'
import { messages as t } from '../../Devices.i18n'
import { Props } from './FindNewDeviceByIp.types'
import * as styles from '../../Detail/IncompleteOnboardingDataModal/IncompleteOnboardingDataModal.styles'
import notificationId from '../../../notificationId'

const FindNewDeviceByIp: FC<Props> = ({ disabled, className }) => {
    const [fetching, setFetching] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [deviceIp, setDeviceIp] = useState<string>('')
    const { formatMessage: _ } = useIntl()
    const baseInputRef = useRef<HTMLInputElement | undefined>(undefined)
    const isMounted = useIsMounted()
    const dispatch = useDispatch()

    useEffect(() => {
        if (deviceIp !== '') {
            // validation ?
        } else {
            error && setError(false)
        }
    }, [deviceIp, error])

    useEffect(() => {
        show && baseInputRef?.current?.focus()
    }, [show])

    const onClose = () => {
        if (!fetching) {
            setShow(false)
            setDeviceIp('')
        }
    }

    const renderBody = () => (
        <FormGroup error={error ? _(t.invalidIp) : undefined} id='form-group-device-ip'>
            <FormLabel required={true} text={_(t.deviceIp)} />
            <FormInput
                disabled={fetching}
                inputRef={baseInputRef}
                inputWrapperStyle={styles.inputWrapper}
                onChange={(e) => setDeviceIp(e.target.value.trim())}
                onKeyPress={(e) => (e.charCode === 13 ? handleFetch() : undefined)}
                placeholder={_(t.enterDeviceIp) as string}
                value={deviceIp}
            />
        </FormGroup>
    )

    const handleFetch = async () => {
        setFetching(true)

        try {
            const promise = addDeviceByIp(deviceIp)
            promise.then((response) => {
                if (isMounted) {
                    setFetching(false)
                    const deviceData = response.data.result

                    dispatch(addDevice(deviceData))

                    Notification.success(
                        {
                            title: _(t.deviceAddByIpSuccess),
                            message: deviceData.data.content.n,
                        },
                        {
                            notificationId: notificationId.SU_CA_FIND_NEW_DEVICE_BY_IP_FETCH,
                        }
                    )

                    setDeviceIp('')
                    setShow(false)
                }
            })
        } catch (e: any) {
            Notification.error(
                {
                    title: _(t.deviceAddByIpError),
                    message: e.message,
                },
                {
                    notificationId: notificationId.SU_CA_FIND_NEW_DEVICE_BY_IP_FETCH,
                }
            )

            isMounted && setFetching(false)
        }
    }

    const renderFooter = () => (
        <ModalFooter
            right={
                <div className='modal-buttons'>
                    <Button className='modal-button' disabled={fetching} onClick={onClose} variant='secondary'>
                        {_(t.cancel)}
                    </Button>

                    <Button className='modal-button' disabled={fetching || error || deviceIp === ''} loading={fetching} onClick={handleFetch} variant='primary'>
                        {_(t.addDevice)}
                    </Button>
                </div>
            }
        />
    )

    return (
        <>
            <Button className={className} disabled={disabled} icon={<IconPlus {...convertSize(20)} />} onClick={() => setShow(true)}>
                {_(t.deviceByIp)}
            </Button>

            <Modal closeButton={!fetching} onClose={onClose} renderBody={renderBody} renderFooter={renderFooter} show={show} title={_(t.findDeviceByIp)} />
        </>
    )
}

export default FindNewDeviceByIp
