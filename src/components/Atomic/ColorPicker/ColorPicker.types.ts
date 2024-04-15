import { ReactNode, SyntheticEvent } from 'react'
import { Placement } from '@floating-ui/react-dom-interactions'
import { RGBColor } from 'react-color'

export type Props = {
    className?: string
    dataTestId?: string
    defaultColor?: RGBColor | string
    id?: string
    menuProps?: {
        placement?: Placement
    }
    onToggle?: (isOpen: boolean, event: SyntheticEvent<any>) => void
    onColorChange?: (color: string) => void
    portalTarget?: ReactNode | Element | null
}

export const defaultProps = {}
