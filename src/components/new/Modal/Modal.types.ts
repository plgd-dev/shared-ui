import { MouseEvent, ReactNode } from 'react'
import { ButtonVariantsType } from '../Button/Button.types'

type RenderType = () => ReactNode

type FooterAction = {
    disabled?: boolean
    label: string
    onClick: (e: MouseEvent<HTMLElement>) => void
    variant: ButtonVariantsType
}

export type Props = {
    appRoot?: ReactNode | Element | null
    className?: string
    closeButton?: boolean
    footerActions?: FooterAction[]
    id?: string
    onClose?: () => void
    onEnter?: () => void
    onEntered?: () => void
    onExit?: () => void
    onExited?: () => void
    portalTarget?: ReactNode | Element | null
    renderHeader?: RenderType | ReactNode
    renderBody?: RenderType | ReactNode
    renderFooter?: RenderType | ReactNode
    show: boolean
    title?: ReactNode
}

export const defaultProps = {
    closeButton: true,
}
