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
    const { defaultDeviceId, deviceAuthCode, deviceAuthLoading, getDeviceAuthCode, deviceInformation, footerActions, i18n, ...rest } = {
        ...defaultProps,
        ...props,
    }
    const {
        register,
        handleSubmit,
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
                <Tooltip content={i18n.copy} css={styles.icon} id={`tooltip-group-${data.attribute}`} portalTarget={undefined}>
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
                        <h3 css={styles.title}>{i18n.deviceInformation}</h3>
                        <CopyElement textToCopy={JSON.stringify(dataForCopy)} />
                    </div>
                    <div css={[styles.getCodeBox, styles.codeBoxWithLines]}>
                        {deviceInformation?.map((info: DeviceInformationLineType, key) => (
                            <DeviceInformationLine key={info.attribute} {...info} />
                        ))}
                    </div>
                </div>
            )
        } else {
            return (
                <div css={styles.getCodeBox}>
                    <Button disabled={!!errors.deviceId} htmlType='submit' loading={deviceAuthLoading} loadingText={i18n.getTheCode} variant='primary'>
                        {i18n.getTheCode}
                    </Button>
                </div>
            )
        }
    }

    const renderBody = () => (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup error={errors.deviceId ? i18n.invalidUuidFormat : undefined} id='device-id'>
                <FormLabel text={i18n.deviceId} />
                <FormInput
                    inputRef={inputRef}
                    placeholder={i18n.enterDeviceID}
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
            footerActions={deviceAuthCode ? footerActions : undefined}
            portalTarget={document.getElementById('modal-root')}
            renderBody={renderBody}
        />
    )
}

ProvisionDeviceModal.displayName = 'ProvisionDeviceModal'
ProvisionDeviceModal.defaultProps = defaultProps

export default ProvisionDeviceModal
