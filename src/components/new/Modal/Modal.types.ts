import { MouseEvent, ReactNode } from 'react'
import { ButtonVariantsType } from '../Button/Button.types'

type RenderType = () => ReactNode

type FooterAction = {
    disabled?: boolean
    label: string
    loading?: boolean
    loadingText?: string
    onClick: (e: MouseEvent<HTMLElement>) => void
    variant: ButtonVariantsType
}

export type Props = {
    appRoot?: ReactNode | Element | null
    className?: string
    closeButton?: boolean
    closeButtonText?: string
    contentPadding?: boolean
    footerActions?: FooterAction[]
    fullSizeButtons?: boolean
    id?: string
    maxWidth?: number
    maxWidthTitle?: number
    onClose?: () => void
    portalTarget?: ReactNode | Element | null
    renderHeader?: RenderType | ReactNode
    renderBody?: RenderType | ReactNode
    renderFooter?: RenderType | ReactNode
    show: boolean
    title?: ReactNode
}

export const defaultProps = {
    closeButton: true,
    closeButtonText: 'Close',
    contentPadding: true,
    maxWidth: 600,
}
