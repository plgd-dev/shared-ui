import React, { FC } from 'react'
import { Props, defaultProps } from './DeleteModal.types'
import Modal from '../../Modal'
import * as styles from './DeleteModal.styles'
import { Icon } from '../../../Icon'

const DeleteModal: FC<Props> = (props) => {
    const { title, subTitle, deleteInformation, ...rest } = { ...defaultProps, ...props }

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
            {deleteInformation.map((info, key) => (
                <div css={styles.item} key={key}>
                    <div css={styles.attr}>{info.label}</div>
                    <div css={styles.val}>{info.value}</div>
                </div>
            ))}
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

DeleteModal.displayName = 'DeleteModal'
DeleteModal.defaultProps = defaultProps

export default DeleteModal
