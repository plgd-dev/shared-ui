import React, { FC, useRef } from 'react'
import { Props, Inputs, defaultProps, DeviceInformationLineType } from './ProvisionDeviceModal.types'
import Modal from '../../Modal'
import FormGroup from '../../../FormGroup'
import FormLabel from '../../../FormLabel'
import FormInput from '../../../FormInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { validate as isValidUUID } from 'uuid'
import Button from '../../../Button'
import * as styles from './ProvisionDeviceModal.styles'
import CopyElement from '../../../CopyElement'
import Tooltip from '../../../Tooltip'
import Icon from '../../../Icon'
import { copyToClipboard } from '../../../../../common/utils'

const ProvisionDeviceModal: FC<Props> = (props) => {
    const { defaultDeviceId, deviceAuthCode, deviceAuthLoading, getDeviceAuthCode, deviceInformation, footerActions, ...rest } = { ...defaultProps, ...props }
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<Inputs>({
        mode: 'all',
        values: {
            deviceId: defaultDeviceId || '',
        },
    })
    const inputRef = useRef(null)
    const onSubmit: SubmitHandler<Inputs> = (data) => getDeviceAuthCode(data.deviceId)

    const DeviceInformationLine = (data: DeviceInformationLineType) => (
        <div css={styles.line}>
            <div css={styles.attribute}>{data.attribute}</div>
            <div css={styles.value}>
                {data.value}
                <Tooltip content='Copy to clipboard' id={`tooltip-group-${data.attribute}`} portalTarget={undefined} css={styles.icon}>
                    <Icon icon='copy' size={16} onClick={() => copyToClipboard(data?.copyValue || data.value, data.certFormat)} />
                </Tooltip>
            </div>
        </div>
    )

    const RenderBoxInfo = () => {
        if (deviceAuthCode && deviceInformation) {
            const dataForCopy = deviceInformation.map((i) => ({ attribute: i.attribute, value: i.copyValue || i.value }))
            return (
                <div>
                    <div css={styles.codeInfoHeader}>
                        <h3 css={styles.title}>Device information</h3>
                        <CopyElement textToCopy={JSON.stringify(dataForCopy)} />
                    </div>
                    <div css={[styles.getCodeBox, styles.codeBoxWithLines]}>
                        {deviceInformation?.map((info: DeviceInformationLineType, key) => (
                            <DeviceInformationLine key={key} {...info} />
                        ))}
                    </div>
                </div>
            )
        } else {
            return (
                <div css={styles.getCodeBox}>
                    <Button variant='primary' htmlType='submit' disabled={!!errors.deviceId} loading={deviceAuthLoading}>
                        Get the code
                    </Button>
                </div>
            )
        }
    }

    const renderBody = () => (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup id='device-id' error={errors.deviceId ? 'Invalid uuid format' : undefined}>
                <FormLabel text='Device ID' />
                <FormInput
                    placeholder='Enter the device ID'
                    inputRef={inputRef}
                    {...register('deviceId', { validate: (val) => isValidUUID(val) })}
                    disabled={!!deviceAuthLoading || !!deviceAuthCode}
                />
            </FormGroup>
            <RenderBoxInfo />
        </form>
    )

    return (
        <Modal
            {...rest}
            appRoot={document.getElementById('root')}
            portalTarget={document.getElementById('modal-root')}
            renderBody={renderBody}
            footerActions={deviceAuthCode ? footerActions : undefined}
        />
    )
}

ProvisionDeviceModal.displayName = 'ProvisionDeviceModal'

export default ProvisionDeviceModal
