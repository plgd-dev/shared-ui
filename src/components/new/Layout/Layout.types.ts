import { ReactNode } from 'react'

export type Props = {
    collapsedMenu?: boolean
    content: ReactNode
    footer: ReactNode
    header: ReactNode
    leftPanel: ReactNode
}

export const defaultProps: Partial<Props> = {
    collapsedMenu: false,
}
