import { ReactNode } from 'react'

export type Props = {
    actionPrimary?: ReactNode
    actionSecondary?: ReactNode
    attribute: string
    iframeMode?: boolean
    leftPanelCollapsed?: boolean
    value: string | number
    show: boolean
}
