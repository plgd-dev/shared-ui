import { ReactNode } from 'react'

export type MenuItem = {
    to: string
    icon: ReactNode
    nameKey: string
    className?: string
}

export type Props = {
    collapsed: boolean
    initializedByAnother?: boolean
    menuItems: MenuItem[]
    toggleCollapsed: () => void
}
