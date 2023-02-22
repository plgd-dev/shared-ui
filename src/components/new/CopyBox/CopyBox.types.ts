import { ReactNode } from 'react'

export type Props = {
    text?: string | ReactNode
    certFormat?: boolean
    textToCopy?: string
    copyToClipboardText?: string
    copiedText?: string
}

export const defaultProps = {
    copiedText: 'Copied',
    copyToClipboardText: 'Copy to clipboard',
}
