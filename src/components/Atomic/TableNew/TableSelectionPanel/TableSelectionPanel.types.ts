import { ReactNode } from 'react'

export type Props = {
    actionPrimary?: ReactNode
    actionSecondary?: ReactNode
    i18n: {
        select: string
    }
    iframeMode?: boolean
    leftPanelCollapsed?: boolean
    selectionInfo: string
    show: boolean
}
