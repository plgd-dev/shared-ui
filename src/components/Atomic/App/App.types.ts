import { ReactNode } from 'react'

export type Props = {
    children: ReactNode
    globalStyle?: boolean
    toastContainerPortalTarget?: any
}

export const defaultProps = {
    globalStyle: true,
}
