import React, { FC, useEffect, useState } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { v4 as uuidv4 } from 'uuid'
import { copyToClipboard } from '../../../common/utils'
import { IconCopy } from '../Icon'
import { Props, defaultProps } from './CopyBox.types'

const CopyBox: FC<Props> = (props) => {
    const { certFormat, text, copyToClipboardText, copiedText, textToCopy, tooltipPlacement } = { ...defaultProps, ...props }
    const [copied, setCopied] = useState<boolean>(false)

    const renderCopyToClipboardHintContent = () =>
        copied ? (
            <div className='copy-success'>
                <i className='fas fa-check-circle m-r-5' />
                {copiedText}
            </div>
        ) : (
            copyToClipboardText
        )

    const handleCopyToClipboard = () => {
        if (copyToClipboard(textToCopy || (text as string), certFormat)) {
            setCopied(true)
        }
    }

    useEffect(() => {
        let timer: any = undefined
        if (copied) {
            timer = setTimeout(() => setCopied(false), 3000)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [copied])

    return (
        <div className='copy-box'>
            {text}
            <OverlayTrigger
                overlay={
                    <Tooltip className='plgd-tooltip' id={`menu-item-tooltip-${uuidv4()}`}>
                        {renderCopyToClipboardHintContent()}
                    </Tooltip>
                }
                placement={tooltipPlacement}
            >
                <div className='box m-l-10' onClick={handleCopyToClipboard}>
                    <IconCopy />
                </div>
            </OverlayTrigger>
        </div>
    )
}

CopyBox.displayName = 'CopyBox'

export default CopyBox
