import React, { FC } from 'react'

import Modal from '../../Modal'
import * as styles from './Prompt.styles'
import { convertSize } from '../../../Icon'
import IconInfo from '../../../Icon/components/IconInfo'
import { Props } from './Prompt.types'

const Prompt: FC<Props> = (props) => {
    const { text, title, ...rest } = props

    const renderHeader = () => (
        <div css={styles.header}>
            <div css={styles.infoIcon}>
                <div css={styles.infoIconInner}>
                    <IconInfo {...convertSize(42)} />
                </div>
            </div>
            <h2 css={[(theme) => styles.title(theme)]}>{title}</h2>
        </div>
    )

    return (
        <Modal
            {...rest}
            fullSizeButtons
            appRoot={document.getElementById('root')}
            closeButton={false}
            contentPadding={false}
            minWidth={450}
            portalTarget={document.getElementById('modal-root')}
            renderBody={() => <div css={styles.text}>{text}</div>}
            renderHeader={renderHeader}
            zIndex={25}
        />
    )
}

Prompt.displayName = 'Prompt'

export default Prompt
