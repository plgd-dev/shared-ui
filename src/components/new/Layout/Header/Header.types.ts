import { ReactNode } from 'react'

export type Props = {
    breadcrumbs?: ReactNode
    useNotificationCenter?: boolean
    userWidget?: ReactNode
}

export const defaultProps: Partial<Props> = {
    useNotificationCenter: true,
}
