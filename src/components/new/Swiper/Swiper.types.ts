import { ReactNode } from 'react'

export type AlignItemsType = 'top' | 'center' | 'bottom'

export type Props = {
    alignItems?: AlignItemsType
    className?: string
    slides: ReactNode[]
}

export const defaultProps: Partial<Props> = {
    alignItems: 'center',
}
