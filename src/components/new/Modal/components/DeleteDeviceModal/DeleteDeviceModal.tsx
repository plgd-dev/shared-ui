import React, { FC } from 'react'
import { Props, defaultProps } from './DeleteDeviceModal.types'
import Modal from '../../Modal'
import * as styles from './DeleteDeviceModal.styles'
import { Icon } from '../../../Icon'

const DeleteDeviceModal: FC<Props> = (props) => {
    const { title, subTitle, deviceId, deviceIdLabel, deviceName, deviceNameLabel, ...rest } = { ...defaultProps, ...props }

    const renderHeader = () => (
        <div css={styles.header}>
            <div css={styles.deleteIcon}>
                <div css={styles.deleteIconInner}>
                    <Icon icon='trash' size={42} />
                </div>
            </div>
            <h2 css={styles.title}>{title}</h2>
            <div css={styles.subTitle}>{subTitle}</div>
        </div>
    )

    const renderBody = () => (
        <div css={styles.body}>
            <div css={styles.item}>
                <div css={styles.attr}>{deviceNameLabel}</div>
                <div css={styles.val}>{deviceName}</div>
            </div>
            <div css={styles.item}>
                <div css={styles.attr}>{deviceIdLabel}</div>
                <div css={styles.val}>{deviceId}</div>
            </div>
        </div>
    )

    return (
        <Modal
            {...rest}
            closeButton={false}
            appRoot={document.getElementById('root')}
            portalTarget={document.getElementById('modal-root')}
            renderHeader={renderHeader}
            renderBody={renderBody}
        />
    )
}

DeleteDeviceModal.displayName = 'DeleteDeviceModal'
DeleteDeviceModal.defaultProps = defaultProps

export default DeleteDeviceModal
