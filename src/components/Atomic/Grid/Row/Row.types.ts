import { CSSProperties, ReactElement, ReactNode } from 'react'

export type Props = {
    className?: string
    dataTestId?: string
    id?: string
    gutters?: boolean
    children: ReactNode | ReactElement
    style?: CSSProperties
}

export const defaultProps: Partial<Props> = {
    gutters: true,
}
