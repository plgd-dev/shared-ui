import { CSSProperties, ReactNode } from 'react'

export type Props = {
    children: ReactNode | ReactNode[]
    className?: string
    compactFormComponentsView?: boolean
    dataTestId?: string
    error?: string | boolean
    errorTooltip?: boolean
    fullSize?: boolean
    id: string
    inline?: boolean
    inlineJustifyContent?: string
    marginBottom?: boolean
    renderProps?: boolean
    style?: CSSProperties
    tooltipPortalTarget?: HTMLElement
    tooltipZIndex?: number
}

export const defaultProps = {
    marginBottom: true,
    inlineJustifyContent: 'flex-start',
}
