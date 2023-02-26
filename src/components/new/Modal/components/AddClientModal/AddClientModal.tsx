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
                    <Button variant='primary' htmlType='submit' disabled={!!errors.deviceName || !!errors.deviceIp} loading={deviceAuthLoading}>
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
                    <FormGroup id='device-name' error={errors.deviceName ? 'Invalid device name' : undefined}>
                        <FormLabel text='Name device' />
                        <FormInput
                            placeholder='Name'
                            inputRef={inputRef}
                            {...register('deviceName', { required: true })}
                            disabled={!!deviceAuthLoading || !!deviceAuthCode}
                        />
                    </FormGroup>
                </Column>
                <Column lg={6}>
                    <FormGroup id='device-ip' error={errors.deviceIp ? 'Invalid device ip' : undefined}>
                        <FormLabel text='IP address' />
                        <FormInput
                            placeholder='IP address'
                            inputRef={inputRef}
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
            portalTarget={document.getElementById('modal-root')}
            renderBody={renderBody}
            footerActions={deviceAuthCode ? footerActions : undefined}
        />
    )
}

AddClientModal.displayName = 'AddClientModal'

export default AddClientModal
