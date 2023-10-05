import { ReactNode } from 'react'

export type Props = {
    autoHeight?: boolean
    autoHeightMax?: number
    autoHeightMin?: number
    horizontalScrollbar?: boolean
    verticalScrollbar?: boolean
    children: ReactNode
}

export const defaultProps: Partial<Props> = {
    horizontalScrollbar: false,
    verticalScrollbar: true,
}
