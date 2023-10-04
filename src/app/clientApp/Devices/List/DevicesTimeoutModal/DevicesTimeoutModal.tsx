import { FC, useState } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import isFunction from 'lodash/isFunction'

import Modal, { ModalStrippedLine } from '../../../../../components/Atomic/Modal'
import { messages as t } from '../../Devices.i18n'
import Button from '../../../../../components/Atomic/Button'
import TimeoutControl from '../../../../../components/Atomic/TimeoutControl'
import { getDevicesDiscoveryTimeout, setDiscoveryTimeout } from '../../slice'
import { DISCOVERY_DEFAULT_TIMEOUT } from '../../constants'
import { Props, defaultProps } from './DevicesTimeoutModal.types'

const DevicesTimeoutModal: FC<Props> = (props) => {
    const { show, onClose } = { ...defaultProps, ...props }
    const { formatMessage: _ } = useIntl()
    const dispatch = useDispatch()
    const discoveryTimeout: number = useSelector(getDevicesDiscoveryTimeout)

    const [userValue, setUserValue] = useState(discoveryTimeout)
    const [ttlHasError, setTtlHasError] = useState(false)

    const renderBody = () => (
        <ModalStrippedLine
            component={
                <TimeoutControl
                    defaultTtlValue={DISCOVERY_DEFAULT_TIMEOUT}
                    defaultValue={discoveryTimeout}
                    i18n={{
                        default: _(t.default),
                        duration: _(t.duration),
                        placeholder: _(t.placeholder),
                        unit: _(t.unit),
                    }}
                    onChange={(val) => setUserValue(val)}
                    onTtlHasError={setTtlHasError}
                />
            }
            label={_(t.discoveryTimeout)}
        />
    )

    const handleSubmit = () => {
        if (userValue !== discoveryTimeout) {
            // @ts-ignore
            dispatch(setDiscoveryTimeout(userValue))
        }

        onClose && isFunction(onClose) && onClose()
    }

    const renderFooter = () => (
        <div className='w-100 d-flex justify-content-end'>
            <div className='modal-buttons'>
                <Button className='modal-button' onClick={() => (onClose ? onClose() : undefined)} variant='secondary'>
                    {_(t.cancel)}
                </Button>

                <Button className='modal-button' disabled={ttlHasError} onClick={handleSubmit} variant='primary'>
                    {_(t.save)}
                </Button>
            </div>
        </div>
    )

    return (
        <Modal
            onClose={() => {
                setUserValue(discoveryTimeout)
                isFunction(onClose) && onClose()
            }}
            renderBody={renderBody}
            renderFooter={renderFooter}
            show={show}
            title={_(t.changeDiscoveryTimeout)}
        />
    )
}

DevicesTimeoutModal.displayName = 'DevicesTimeoutModal'
DevicesTimeoutModal.defaultProps = defaultProps

export default DevicesTimeoutModal
