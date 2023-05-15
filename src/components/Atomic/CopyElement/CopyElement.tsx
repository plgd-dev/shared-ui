import React, { FC, useEffect, useState } from 'react'
import { defaultProps, Props } from './CopyElement.types'
import * as styles from './CopyElement.styles'
import { Icon } from '../Icon'
import { copyToClipboard } from '../../../common/utils'

const CopyElement: FC<Props> = (props) => {
    const { copyText, copiedText, textToCopy } = { ...defaultProps, ...props }
    const [copied, setCopied] = useState<boolean>(false)

    const handleCopy = (e: any) => {
        e.preventDefault()
        if (copyToClipboard(textToCopy)) {
            setCopied(true)
        }
    }
    useEffect(() => {
        let timer: number = 0
        if (copied) {
            let timer = setTimeout(() => setCopied(false), 3000)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [copied])

    return (
        <div css={styles.copyElement}>
            <a css={styles.copy} href='src/components/atomic/CopyElement/index#' onClick={handleCopy}>
                <Icon icon='copy' />
                <span css={styles.text}>{copyText}</span>
            </a>
            <a css={[styles.copied, copied && styles.active]} href='src/components/atomic/CopyElement/index#' onClick={(e) => e.preventDefault()}>
                <Icon icon='copy' />
                <span css={styles.text}>{copiedText}</span>
            </a>
        </div>
    )
}

CopyElement.displayName = 'CopyElement'
CopyElement.defaultProps = defaultProps

export default CopyElement
