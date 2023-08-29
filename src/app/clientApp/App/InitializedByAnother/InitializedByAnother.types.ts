import { ReactNode } from 'react'

export type Props = {
    description?: ReactNode
    logout?: () => void
    show: boolean
}
