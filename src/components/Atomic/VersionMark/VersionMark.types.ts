import { SyntheticEvent } from 'react'
import { severities } from './constants'

export type VersionMarkSeverityType = (typeof severities)[keyof typeof severities]

export type Props = {
    className?: string
    collapsed?: boolean
    id?: string
    update?: {
        text: string
        onClick?: (e: SyntheticEvent) => void
    }
    versionText: string
    severity: VersionMarkSeverityType
}

export const defaultProps = {
    collapsed: false,
}
