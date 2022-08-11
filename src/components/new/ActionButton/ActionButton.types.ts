import { ReactNode, SyntheticEvent } from 'react'
import { dropdownTypes } from './constants'
import Dropdown from 'react-bootstrap/Dropdown'
import { AlignType } from 'react-bootstrap/DropdownMenu'

export type ActionButtonTypeType = typeof dropdownTypes[keyof typeof dropdownTypes]

export type ActionButtonItemType = {
    component?: ReactNode
    hidden?: boolean
    icon?: string
    id?: string
    label: string
    loading?: boolean
    onClick?: () => void
}

export type Props = {
    items: ActionButtonItemType[]
    menuProps: {
        align?: AlignType
        flip?: boolean
    }
    onToggle: () => (
        isOpen: boolean,
        event: SyntheticEvent<Dropdown>,
        metadata: {
            source: 'select' | 'click' | 'rootClose' | 'keydown'
        }
    ) => void
    type: ActionButtonTypeType
}

export const defaultProps = {
    type: dropdownTypes.EMPTY,
    menuProps: {},
}
