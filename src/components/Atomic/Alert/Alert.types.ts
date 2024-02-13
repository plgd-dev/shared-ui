import { ReactNode } from 'react'
import { severities } from './constants'

export type AlertSeverityType = (typeof severities)[keyof typeof severities]

export type Props = {
    children: ReactNode
    className?: string
    dataTestId?: string
    noSeverityBg?: boolean
    severity?: AlertSeverityType
}
