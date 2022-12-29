import { ReactNode } from 'react'

export type Props = {
    className?: string
    children: ReactNode
    icon?: string
    id?: string
    onClick?: () => void
}
