import React, { FC } from 'react'
import { Props, defaultProps } from './DeleteModal.types'
import Modal from '../../Modal'
import * as styles from './DeleteModal.styles'
import { Icon } from '../../../Icon'

const DeleteModal: FC<Props> = (props) => {
    const { title, subTitle, deleteInformation, maxWidthTitle, ...rest } = { ...defaultProps, ...props }

    const renderHeader = () => (
        <div css={styles.header}>
            <div css={styles.deleteIcon}>
                <div css={styles.deleteIconInner}>
                    <Icon icon='trash' size={42} />
                </div>
            </div>
            <h2 css={styles.title(maxWidthTitle)}>{title}</h2>
            <div css={styles.subTitle}>{subTitle}</div>
        </div>
    )

    const renderBody = () => {
        if (deleteInformation) {
            return (
                <div css={styles.body}>
                    {deleteInformation.map((info, key) => (
                        <div css={styles.item} key={key}>
                            <div css={styles.attr}>{info.label}</div>
                            <div css={styles.val}>{info.value}</div>
                        </div>
                    ))}
                </div>
            )
        } else {
            return <div css={styles.emptyDeleteInformation}></div>
        }
    }

    return (
        <Modal
            {...rest}
            appRoot={document.getElementById('root')}
            closeButton={false}
            portalTarget={document.getElementById('modal-root')}
            renderBody={renderBody}
            renderHeader={renderHeader}
        />
    )
}

DeleteModal.displayName = 'DeleteModal'
DeleteModal.defaultProps = defaultProps

export default DeleteModal
