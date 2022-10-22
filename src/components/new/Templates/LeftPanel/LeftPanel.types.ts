import { tagVariants } from './constants'

export type MenuTagVariantType = typeof tagVariants[keyof typeof tagVariants]

type MenuItemTag = {
    text: string
    variant: MenuTagVariantType
}

export type MenuItem = {
    icon: string
    id: string
    tag?: MenuItemTag
    title: string
    children?: MenuItem[]
}

type MenuGroup = {
    title: string
    items?: MenuItem[]
}

export type Props = {
    activeId?: string
    collapsed?: boolean
    menu?: MenuGroup[]
    newFeature?: {
        onClick: () => void
        onClose: () => void
    }
}
