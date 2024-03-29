import { ReactNode } from 'react'

export type Props = {
    children: ReactNode | ReactNode[]
    className?: string
    error?: string | boolean
    errorTooltip?: boolean
    fullSize?: boolean
    id: string
    inline?: boolean
    inlineJustifyContent?: string
    marginBottom?: boolean
    renderProps?: boolean
}

export const defaultProps = {
    marginBottom: true,
    inlineJustifyContent: 'flex-start',
}
