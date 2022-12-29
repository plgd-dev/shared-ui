import { ReactNode } from 'react'

export type AlignItemsType = 'top' | 'center' | 'bottom'

export type Props = {
    alignItems?: AlignItemsType
    className?: string
    delay?: number
    slides: ReactNode[]
}

export const defaultProps: Partial<Props> = {
    alignItems: 'center',
    delay: 2500,
}
