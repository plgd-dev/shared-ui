import { severities } from './constants'

export type VersionMarkSeverityType = typeof severities[keyof typeof severities]

export type Props = {
    versionText: string
    severity: VersionMarkSeverityType
    update?: {
        text: string
        onClick?: () => void
    }
}
