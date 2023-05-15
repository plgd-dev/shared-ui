import { ReactNode } from 'react'

export type Props = {
    children: ReactNode
    className?: string
    icon?: string
    onClick?: () => void
    to?: string
    tooltip?: string
}
