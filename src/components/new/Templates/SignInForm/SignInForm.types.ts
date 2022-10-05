import { ReactNode } from 'react'

export type Props = {
    inputs: ReactNode | ReactNode[]
    actions?: ReactNode | ReactNode[]
    cta: ReactNode
    footerActions?: boolean
    action?: string
}

export const defaultProps: Partial<Props> = {
    footerActions: true,
}
