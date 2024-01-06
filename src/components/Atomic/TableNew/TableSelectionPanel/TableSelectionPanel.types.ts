import { ReactNode } from 'react'

export type Props = {
    actionPrimary?: ReactNode
    actionSecondary?: ReactNode
    i18n: {
        select: string
    }
    iframeMode?: boolean | 'absolute'
    leftPanelCollapsed?: boolean
    selectionInfo: string
    show: boolean
}
