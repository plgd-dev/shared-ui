import { ReactNode } from 'react'

export type Props = {
    actionPrimary?: ReactNode
    actionSecondary?: ReactNode
    iframeMode?: boolean
    leftPanelCollapsed?: boolean
    selectionInfo: string
    show: boolean
}
