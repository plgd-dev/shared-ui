import { ReactNode, SyntheticEvent } from 'react'
import { dropdownTypes } from './constants'
import { Placement } from '@floating-ui/react-dom-interactions'

export type ActionButtonTypeType = (typeof dropdownTypes)[keyof typeof dropdownTypes]

export type ActionButtonItemType = {
    component?: ReactNode
    hidden?: boolean
    icon?: ReactNode
    id?: string
    label: string
    loading?: boolean
    onClick?: () => void
}

export type Props = {
    className?: string
    dataTestId?: string
    dataTestIdDropdown?: string
    defaultOpen?: boolean
    id?: string
    items: ActionButtonItemType[]
    loading?: boolean
    menuProps?: {
        placement?: Placement
    }
    onToggle?: (isOpen: boolean, event: SyntheticEvent<any>) => void
    portalTarget?: ReactNode | Element | null
    type?: ActionButtonTypeType
    disabled?: boolean
}

export const defaultProps = {
    type: dropdownTypes.EMPTY,
}
