import { ReactNode } from 'react'

export type Props = {
    children: ReactNode | ReactNode[]
    className?: string
    error?: string
    id: string
    marginBottom?: boolean
}

export const defaultProps = {
    marginBottom: true,
}
