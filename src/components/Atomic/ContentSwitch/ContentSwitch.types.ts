import { ReactElement } from 'react'

export type Props = {
    activeItem: number
    children: ReactElement[]
    isAsync?: boolean
    onAnimationComplete?: () => void
}
