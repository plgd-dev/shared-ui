import { Placement } from '@floating-ui/react'
import { ReactNode } from 'react'

export type Props = {
    text?: string | ReactNode
    certFormat?: boolean
    textToCopy?: string
    copyToClipboardText?: string
    copiedText?: string
    tooltipPlacement?: Placement
}

export const defaultProps = {
    copiedText: 'Copied',
    copyToClipboardText: 'Copy to clipboard',
    tooltipPlacement: 'right' as Placement,
}
