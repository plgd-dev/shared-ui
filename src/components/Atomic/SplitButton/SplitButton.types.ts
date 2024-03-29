import { Props as ButtonProps, defaultProps as ButtonDefaultProps } from '../Button/Button.types'
import { Placement } from '@floating-ui/react-dom-interactions'
import { ReactNode } from 'react'

export type SplitButtonItemType = {
    component?: ReactNode
    hidden?: boolean
    icon?: ReactNode
    id?: string
    label: string
    onClick: (e: MouseEvent) => void
}

export type Props = ButtonProps & {
    items: SplitButtonItemType[]
    loading?: boolean
    menuProps?: {
        placement?: Placement
    }
    defaultOpen?: boolean
    dataTestId?: string
    dataTestIdDropdown?: string
}

export const defaultProps = {
    ...ButtonDefaultProps,
    defaultOpen: false,
}
