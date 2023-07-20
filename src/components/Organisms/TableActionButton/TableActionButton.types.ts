import { ActionButtonItemType } from '../../Atomic/ActionButton/ActionButton.types'

export type ItemType = ActionButtonItemType

export type Props = {
    disabled?: boolean
    items: ItemType[]
    onToggle?: (state: boolean) => void
}
