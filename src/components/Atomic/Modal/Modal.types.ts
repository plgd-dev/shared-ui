import { CSSProperties, MouseEvent, ReactNode } from 'react'
import { ButtonVariantsType } from '../Button/Button.types'

type RenderType = () => ReactNode

type FooterAction = {
    dataTestId?: string
    disabled?: boolean
    label: string
    loading?: boolean
    loadingText?: string
    onClick: (e: MouseEvent<HTMLElement>) => void
    variant: ButtonVariantsType
}

export type Props = {
    appRoot?: ReactNode | Element | null
    bodyStyle?: CSSProperties
    className?: string
    closeButton?: boolean
    closeButtonText?: string
    closeOnBackdrop?: boolean
    closeOnEsc?: boolean
    contentPadding?: boolean
    dataTestId?: string
    footerActions?: FooterAction[]
    fullSize?: boolean
    fullSizeButtons?: boolean
    id?: string
    maxHeight?: number | string
    maxWidth?: number | string
    maxWidthTitle?: number
    minWidth?: number | string
    onClose?: () => void
    portalTarget?: ReactNode | Element | null
    renderBody?: RenderType | ReactNode
    renderFooter?: RenderType | ReactNode
    renderHeader?: RenderType | ReactNode
    show: boolean
    subTitle?: string
    title?: ReactNode
    width?: string | number
    zIndex?: number
}

export const defaultProps = {
    closeButton: true,
    closeButtonText: 'Close',
    closeOnBackdrop: true,
    closeOnEsc: true,
    contentPadding: true,
    maxHeight: '90%',
    maxWidth: '90%',
    minWidth: 600,
}
