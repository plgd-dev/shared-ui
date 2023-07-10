import { VersionMarkSeverityType } from './VersionMark.types'
import { severities } from './constants'

export type Props = {
    buildVersion: string
    githubVersion: string
    i18n: {
        newUpdateIsAvailable: string
        version: string
    }
}

export type getVersionMarkDataReturnType = {
    severity: VersionMarkSeverityType
    text: string
}

export const getVersionMarkData = (props: Props): getVersionMarkDataReturnType => {
    const { buildVersion: buildVersionRaw, githubVersion, i18n } = props
    let text = `${i18n.version} ${buildVersionRaw}`
    const buildVersion = buildVersionRaw.split('-')[0] // remove PR or other tags after "-"

    if (githubVersion === buildVersion) {
        return {
            severity: severities.SUCCESS,
            text,
        }
    } else {
        text += ` • ${i18n.newUpdateIsAvailable}`
        const [latestMajor, latestMinor, latestPatch] = githubVersion?.split('.') || []
        const [currentMajor, currentMinor, currentPath] = buildVersion.split('.')
        const hasError =
            Math.abs(parseInt(latestMinor) - parseInt(currentMinor)) >= 3 ||
            Math.abs(parseInt(latestPatch) - parseInt(currentPath)) >= 3 ||
            latestMajor !== currentMajor

        return {
            severity: hasError ? severities.ERROR : severities.WARNING,
            text,
        }
    }
}
