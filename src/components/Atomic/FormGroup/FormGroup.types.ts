import { ReactNode } from 'react'

export type Props = {
    children: ReactNode | ReactNode[]
    className?: string
    error?: string | boolean
    id: string
    inline?: boolean
    inlineJustifyContent?: string
    marginBottom?: boolean
}

export const defaultProps = {
    marginBottom: true,
    inlineJustifyContent: 'flex-start',
}