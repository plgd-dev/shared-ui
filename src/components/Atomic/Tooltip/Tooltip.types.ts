import { ReactElement, ReactNode } from 'react'

export type Props = {
    children: JSX.Element
    className?: string
    content: ReactNode
    delay?: number
    id?: string
    initialOpen?: boolean
    portalTarget?: HTMLElement
}

export const defaultProps: Partial<Props> = {
    portalTarget: document.getElementById('modal-floating')!,
}
