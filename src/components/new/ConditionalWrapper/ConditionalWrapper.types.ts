import { ReactElement, ReactNode } from 'react'

export type Props = {
    condition: boolean
    wrapper: (c: ReactNode) => ReactElement
    children: ReactElement
}
