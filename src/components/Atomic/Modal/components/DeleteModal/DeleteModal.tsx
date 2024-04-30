import React, { FC } from 'react'
import { Props, defaultProps } from './DeleteModal.types'
import Modal from '../../Modal'
import * as styles from './DeleteModal.styles'
import { convertSize, IconTrash } from '../../../Icon'

const DeleteModal: FC<Props> = (props) => {
    const { title, subTitle, deleteInformation, maxWidthTitle, ...rest } = { ...defaultProps, ...props }

    const renderHeader = () => (
        <div css={styles.header}>
            <div css={styles.deleteIcon}>
                <div css={styles.deleteIconInner}>
                    <IconTrash {...convertSize(42)} />
                </div>
            </div>
            <h2 css={[(theme) => styles.title(theme, maxWidthTitle)]}>{title}</h2>
            {subTitle && <div css={styles.subTitle}>{subTitle}</div>}
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
            zIndex={25}
        />
    )
}

DeleteModal.displayName = 'DeleteModal'

export default DeleteModal
