import { ReactNode } from 'react'

export type Props = {
    children: ReactNode
    fullHeight?: boolean
    onAnimationComplete?: () => void
    value: number
}
