import { ReactNode } from 'react'
import { severities } from './constants'

export type AlertSeverityType = (typeof severities)[keyof typeof severities]

export type Props = {
    children: ReactNode
    className?: string
    closeable?: boolean
    dataTestId?: string
    noSeverityBg?: boolean
    severity?: AlertSeverityType
}

export const defaultProps: Partial<Props> = {
    closeable: true,
}
