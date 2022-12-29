import { ReactNode } from 'react'

type RenderType = () => ReactNode

export type Props = {
    appRoot?: ReactNode | Element | null
    className?: string
    closeButton?: boolean
    id?: string
    onClose?: () => void
    onEnter?: () => void
    onEntered?: () => void
    onExit?: () => void
    onExited?: () => void
    portalTarget?: ReactNode | Element | null
    renderBody?: RenderType | ReactNode
    renderFooter?: RenderType | ReactNode
    show: boolean
    title?: ReactNode
}

export const defaultProps = {
    closeButton: true,
}
