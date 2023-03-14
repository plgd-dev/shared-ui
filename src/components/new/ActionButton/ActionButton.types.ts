import { ReactNode, SyntheticEvent } from 'react'
import { dropdownTypes } from './constants'
import { AlignType } from 'react-bootstrap/types'

export type ActionButtonTypeType = typeof dropdownTypes[keyof typeof dropdownTypes]

export type ActionButtonItemType = {
    component?: ReactNode
    hidden?: boolean
    icon?: string | ReactNode
    id?: string
    label: string
    loading?: boolean
    onClick?: () => void
}

export type Props = {
    children: ReactNode
    items: ActionButtonItemType[]
    menuProps?: {
        align?: AlignType
        flip?: boolean
    }
    onToggle?: () => (
        isOpen: boolean,
        event: SyntheticEvent<any>,
        metadata: {
            source: 'select' | 'click' | 'rootClose' | 'keydown'
        }
    ) => void
    type?: ActionButtonTypeType
    disabled?: boolean
}

export const defaultProps = {
    type: dropdownTypes.EMPTY,
    menuProps: {},
}
