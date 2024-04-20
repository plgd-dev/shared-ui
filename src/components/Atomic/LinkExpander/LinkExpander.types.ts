import { ReactNode } from 'react'

export type Props = {
    children: ReactNode
    i18n: {
        hide: string
        show: string
        name: string
    }
    show: boolean
    toggleView: (view: boolean) => void
}
