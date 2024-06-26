import React, { FC, useEffect, useState } from 'react'
import { defaultProps, Props } from './CopyElement.types'
import * as styles from './CopyElement.styles'
import { IconCopy } from '../Icon'
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
        let timer: any = 0
        if (copied) {
            timer = setTimeout(() => setCopied(false), 3000)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [copied])

    return (
        <div css={styles.copyElement}>
            <a css={styles.copy} href='#' onClick={handleCopy}>
                <IconCopy />
                <span css={styles.text}>{copyText}</span>
            </a>
            <a css={[styles.copied, copied && styles.active]} href='#' onClick={(e) => e.preventDefault()}>
                <IconCopy />
                <span css={styles.text}>{copiedText}</span>
            </a>
        </div>
    )
}

CopyElement.displayName = 'CopyElement'

export default CopyElement
