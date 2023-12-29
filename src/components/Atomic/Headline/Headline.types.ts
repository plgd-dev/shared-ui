import { ReactNode } from 'react'

export type HeadlineType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type Props = {
    className?: string
    children: ReactNode
    dataTestId?: string
    id?: string
    type?: HeadlineType
}

export const defaultProps: Partial<Props> = {
    type: 'h1',
}
