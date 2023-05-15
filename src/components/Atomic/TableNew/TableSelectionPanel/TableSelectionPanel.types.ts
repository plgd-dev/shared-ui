import { ReactNode } from 'react'

export type Props = {
    actionPrimary?: ReactNode
    actionSecondary?: ReactNode
    leftPanelCollapsed?: boolean
    selectionInfo: string
    show: boolean
}
