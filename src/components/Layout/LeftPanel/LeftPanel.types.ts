import { tagVariants, itemVisibility } from './constants'
import { ReactNode, SyntheticEvent } from 'react'
import { Strategy } from '@floating-ui/core/src/types'

export type MenuTagVariantType = (typeof tagVariants)[keyof typeof tagVariants]
export type MenuItemVisibilityType = (typeof itemVisibility)[keyof typeof itemVisibility]

type MenuItemTag = {
    text: string
    variant: MenuTagVariantType | string
}

export type SubMenuItem = Omit<MenuItem, 'icon'>

export type MenuItem = {
    children?: SubMenuItem[]
    dataTestId?: string
    exact?: boolean
    icon: ReactNode
    id: string
    link?: string
    paths?: string[]
    tag?: MenuItemTag
    title: any
    visibility?: MenuItemVisibilityType
    disabled?: boolean
}

export type MenuGroup = {
    title: any
    items?: MenuItem[]
}

export type Props = {
    activeId?: string
    className?: string
    collapsed?: boolean
    headerIconCollapsePortalTargetId?: string
    id?: string
    logo: ReactNode
    menu?: MenuGroup[]
    newFeature?: {
        onClick: () => void
        onClose: () => void
        i18n: {
            headline: string
            description: string
        }
    }
    onItemClick?: (item: MenuItem | SubMenuItem, e: SyntheticEvent) => void
    setCollapsed?: (collapsed: boolean) => void
    versionMark?: ReactNode
}

export type LeftPanelItemType = {
    active: string | null
    collapsed?: boolean
    handleItemClick: (item: MenuItem | SubMenuItem, e: SyntheticEvent) => void
    item: MenuItem
    key: number
}

export type LeftPanelSubItemsType = {
    active: string | null
    collapsed?: boolean
    floating: any
    handleItemClick: (item: MenuItem | SubMenuItem, e: SyntheticEvent) => void
    isActive?: boolean
    item: MenuItem
    strategy: Strategy
    x: number | null
    y: number | null
}

export const defaultProps: Partial<Props> = {
    headerIconCollapsePortalTargetId: 'header-icon-collapse-portal-target',
}
