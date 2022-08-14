export type MenuItem = {
    to: string
    icon: string
    nameKey: string
    className?: string
}

export type Props = {
    collapsed: boolean
    toggleCollapsed: () => void
    menuItems: MenuItem[]
}
