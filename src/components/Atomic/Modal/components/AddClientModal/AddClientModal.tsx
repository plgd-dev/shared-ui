import React, { FC, useRef } from 'react'
import { Props, Inputs, defaultProps, DeviceInformationLineType } from './AddClientModal.types'
import Modal from '../../Modal'
import FormGroup from '../../../FormGroup'
import FormLabel from '../../../FormLabel'
import FormInput from '../../../FormInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { validate as isValidUUID } from 'uuid'
import Button from '../../../Button'
import * as styles from './AddClientModal.styles'
import CopyElement from '../../../CopyElement'
import Tooltip from '../../../Tooltip'
import Icon from '../../../Icon'
import { copyToClipboard } from '../../../../../common/utils'
import { Column, Row } from '../../../Grid'

const AddClientModal: FC<Props> = (props) => {
    const { defaultDeviceName, defaultDeviceIp, deviceAuthCode, deviceAuthLoading, getDeviceAuthCode, deviceInformation, footerActions, ...rest } = {
        ...defaultProps,
        ...props,
    }
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<Inputs>({
        mode: 'all',
        values: {
            deviceName: defaultDeviceName || '',
            deviceIp: defaultDeviceIp || '',
        },
    })
    const inputRef = useRef(null)
    const onSubmit: SubmitHandler<Inputs> = (data) => getDeviceAuthCode(data.deviceName, data.deviceIp)

    const DeviceInformationLine = (data: DeviceInformationLineType) => (
        <div css={styles.line}>
            <div css={styles.attribute}>{data.attribute}</div>
            <div css={styles.value}>
                {data.value}
                <Tooltip content='Copy to clipboard' css={styles.icon} id={`tooltip-group-${data.attribute}`} portalTarget={undefined}>
                    <Icon icon='copy' onClick={() => copyToClipboard(data?.copyValue || data.value, data.certFormat)} size={16} />
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
                        <h3 css={styles.title}>Client information</h3>
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
                    <Button disabled={!!errors.deviceName || !!errors.deviceIp} htmlType='submit' loading={deviceAuthLoading} variant='primary'>
                        Add the client
                    </Button>
                </div>
            )
        }
    }

    const renderBody = () => (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Column lg={6}>
                    <FormGroup error={errors.deviceName ? 'Invalid device name' : undefined} id='device-name'>
                        <FormLabel text='Name device' />
                        <FormInput
                            inputRef={inputRef}
                            placeholder='Name'
                            {...register('deviceName', { required: true })}
                            disabled={!!deviceAuthLoading || !!deviceAuthCode}
                        />
                    </FormGroup>
                </Column>
                <Column lg={6}>
                    <FormGroup error={errors.deviceIp ? 'Invalid device ip' : undefined} id='device-ip'>
                        <FormLabel text='IP address' />
                        <FormInput
                            inputRef={inputRef}
                            placeholder='IP address'
                            {...register('deviceIp', { required: true })}
                            disabled={!!deviceAuthLoading || !!deviceAuthCode}
                        />
                    </FormGroup>
                </Column>
            </Row>
            <RenderBoxInfo />
        </form>
    )

    return (
        <Modal
            {...rest}
            appRoot={document.getElementById('root')}
            footerActions={deviceAuthCode ? footerActions : undefined}
            portalTarget={document.getElementById('modal-root')}
            renderBody={renderBody}
        />
    )
}

AddClientModal.displayName = 'AddClientModal'

export default AddClientModal
