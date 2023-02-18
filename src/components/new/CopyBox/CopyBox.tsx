import React, { FC, useEffect, useState } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { v4 as uuidv4 } from 'uuid'
import { copyToClipboard } from '../../../common/utils'
import { messages as t } from './CopyBox.i18n'
import { Props } from './CopyBox.types'
import { useIntl } from 'react-intl'

const CopyBox: FC<Props> = (props) => {
    const { certFormat, text, copyToClipboardText, textToCopy } = props
    const [copied, setCopied] = useState<boolean>(false)
    const { formatMessage: _ } = useIntl()

    const renderCopyToClipboardHintContent = () =>
        copied ? (
            <div className='copy-success'>
                <i className='fas fa-check-circle m-r-5' />
                {_(t.copied)}
            </div>
        ) : (
            copyToClipboardText || _(t.copyToClipboard)
        )

    const handleCopyToClipboard = () => {
        if (copyToClipboard(textToCopy || text, certFormat)) {
            setCopied(true)
        }
    }

    useEffect(() => {
        let timer: any = undefined
        if (copied) {
            let timer = setTimeout(() => setCopied(false), 3000)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [copied])

    return (
        <div className='copy-box'>
            {text}
            <OverlayTrigger
                placement='right'
                overlay={
                    <Tooltip id={`menu-item-tooltip-${uuidv4()}`} className='plgd-tooltip'>
                        {renderCopyToClipboardHintContent()}
                    </Tooltip>
                }
            >
                <div className='box m-l-10' onClick={handleCopyToClipboard}>
                    <i className='far fa-copy' />
                </div>
            </OverlayTrigger>
        </div>
    )
}

CopyBox.displayName = 'CopyBox'

export default CopyBox
