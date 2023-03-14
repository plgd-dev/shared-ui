import { ReactNode } from 'react'

export type Props = {
    checked: boolean
    className?: string
    name: string
    onChange: (e: any) => void
    loading?: boolean
}
