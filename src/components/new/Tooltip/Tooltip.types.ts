import { ReactNode } from 'react'

export type Props = {
    children: JSX.Element
    className?: string
    content: ReactNode
    delay?: number
    id?: string
    initialOpen?: boolean
}
