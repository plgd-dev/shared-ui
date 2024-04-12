import { useCallback, useEffect, useState } from 'react'
import { getMinutesBetweenDates } from '../utils'
import { GITHUB_VERSION_REQUEST_INTERVAL } from '../../app/clientApp/constants'
import { getVersionNumberFromGithub } from '../../app/clientApp/App/AppRest'

type SettingsType = {
    requestedDatetime?: string
    githubVersionUrl?: string
}

type VersionObject = {
    requestedDatetime: Date
    latest: string
    latest_url: string
}

export function useAppVersion(settings: SettingsType) {
    const { requestedDatetime, githubVersionUrl } = settings
    const [version, setVersion] = useState<VersionObject | null>(null)

    const requestVersion = useCallback(
        (now: Date) => {
            getVersionNumberFromGithub(githubVersionUrl).then((ret) => {
                setVersion({
                    requestedDatetime: now,
                    latest: ret.data.tag_name.replace('v', ''),
                    latest_url: ret.data.html_url,
                })
            })
        },
        [githubVersionUrl]
    )

    useEffect(() => {
        const now: Date = new Date()

        if (!requestedDatetime || getMinutesBetweenDates(new Date(requestedDatetime), now) > GITHUB_VERSION_REQUEST_INTERVAL) {
            requestVersion(now)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [version]
}
