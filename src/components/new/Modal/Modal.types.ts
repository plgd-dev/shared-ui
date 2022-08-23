import { ReactNode } from 'react'

type RenderType = () => ReactNode

export type Props = {
    backdropClassName?: string
    closeButton?: boolean
    dialogClassName?: string
    onClose?: () => void
    onExited?: () => void
    renderBody?: RenderType | ReactNode
    renderFooter?: RenderType | ReactNode
    show: boolean
    title?: ReactNode
}

export const defaultProps = {
    closeButton: true,
}
