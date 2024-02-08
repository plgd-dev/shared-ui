import { ReactNode, SyntheticEvent } from 'react'

export type Props = {
    children: ReactNode
    onClick: (e: SyntheticEvent) => void
    zIndex?: number
}

export const defaultProps: Partial<Props> = {
    zIndex: 1,
}
