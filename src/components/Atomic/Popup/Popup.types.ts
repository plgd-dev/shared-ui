import { ReactNode } from 'react'

export type Props = {
    description: string
    formNode: ReactNode
    headline: string
    right?: {
        headline: string
        text: ReactNode
    }
}
