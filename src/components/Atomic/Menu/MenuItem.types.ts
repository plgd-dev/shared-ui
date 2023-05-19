import { ReactNode } from 'react'

export type Props = {
    children: ReactNode
    className?: string
    icon?: ReactNode
    onClick?: () => void
    to?: string
    tooltip?: string
}
