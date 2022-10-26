import { ReactNode } from 'react'

export type Props = {
    activeStep?: number
    description?: ReactNode
    displayMessage?: boolean
    formNode: ReactNode
    headline?: string
    isAppInitiatedAction?: boolean
    leftBottomNode?: ReactNode
    leftCenterNode?: ReactNode
    message?: {
        type: string
        summary: string
    }
    steps?: string[]
}
