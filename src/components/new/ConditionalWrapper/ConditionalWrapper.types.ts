import { ReactNode } from 'react'

export type Props = {
    condition: boolean
    wrapper: (c: ReactNode) => ReactNode
    children: ReactNode
}