import { ReactNode } from 'react'

export type Props = {
    backdropClassName?: string
    closeButton?: boolean
    dialogClassName?: string
    onClose?: () => void
    renderBody?: ReactNode
    renderFooter?: ReactNode
    show: boolean
    title?: ReactNode
}

export const defaultProps = {
    closeButton: true,
}
