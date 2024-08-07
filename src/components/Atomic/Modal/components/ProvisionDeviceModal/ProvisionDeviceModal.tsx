import React, { FC, useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Props, Inputs, defaultProps, DeviceInformationLineType } from './ProvisionDeviceModal.types'
import Modal from '../../Modal'
import FormGroup from '../../../FormGroup'
import FormLabel from '../../../FormLabel'
import FormInput from '../../../FormInput'
import Button from '../../../Button'
import * as styles from './ProvisionDeviceModal.styles'
import CopyElement from '../../../CopyElement'
import Tooltip from '../../../Tooltip'
import { IconCopy } from '../../../Icon'
import { checkIfValidUUID, copyToClipboard } from '../../../../../common/utils'

const ProvisionDeviceModal: FC<Props> = (props) => {
    const { defaultDeviceId, deviceAuthCode, deviceAuthLoading, getDeviceAuthCode, deviceInformation, footerActions, i18n, resetIndex, ...rest } = {
        ...defaultProps,
        ...props,
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>({
        mode: 'all',
        values: {
            deviceId: defaultDeviceId || '',
        },
    })

    const inputRef = useRef(null)
    const onSubmit: SubmitHandler<Inputs> = (data) => getDeviceAuthCode(data.deviceId)

    useEffect(() => {
        if (resetIndex) {
            reset()
        }
    }, [reset, resetIndex])

    const DeviceInformationLine = (data: DeviceInformationLineType) => (
        <div css={styles.line}>
            <div css={styles.attribute}>{data.attribute}</div>
            <div css={styles.value}>
                {data.value}
                <Tooltip content={i18n.copy} css={styles.icon} id={`tooltip-group-${data.attribute}`} portalTarget={undefined}>
                    <IconCopy onClick={() => copyToClipboard(data?.copyValue || data.value, data.certFormat)} />
                </Tooltip>
            </div>
        </div>
    )

    const RenderBoxInfo = () => {
        if (deviceAuthCode && deviceInformation) {
            const dataForCopy = deviceInformation.map((i) => ({ attribute: i.attribute, value: i.copyValue || i.value, attributeKey: i.attributeKey }))
            return (
                <div>
                    <div css={styles.codeInfoHeader}>
                        <h3 css={styles.title}>{i18n.deviceInformation}</h3>
                        <CopyElement textToCopy={JSON.stringify(dataForCopy)} />
                    </div>
                    <div css={[styles.getCodeBox, styles.codeBoxWithLines]}>
                        {deviceInformation?.map((info: DeviceInformationLineType) => <DeviceInformationLine key={info.attributeKey} {...info} />)}
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
                    {...register('deviceId', { validate: (val) => checkIfValidUUID(val) })}
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

export default ProvisionDeviceModal
