import React, { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useIntl } from 'react-intl'

import { getVersionMarkData } from '../../../../components/Atomic'
import VersionMark from '../../../../components/Atomic/VersionMark'
import { severities } from '../../../../components/Atomic/VersionMark/constants'
import { security } from '../../../../common/services'

import { Props } from './FooterVersion.types'
import { messages as t } from './FooterVersion.i18n'

const FooterVersion: FC<Props> = (props) => {
    const { formatMessage: _ } = useIntl()

    const appStore = useSelector((state: any) => state.app)
    const wellKnownConfig = security.getWellKnowConfig()

    const versionMarkData = useMemo(
        () =>
            getVersionMarkData({
                buildVersion: wellKnownConfig?.version || '',
                githubVersion: appStore.version.latest || '',
                i18n: {
                    version: _(t.version),
                    newUpdateIsAvailable: _(t.newUpdateIsAvailable),
                },
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [appStore.version.latest, wellKnownConfig]
    )

    if (!wellKnownConfig) {
        return null
    }

    return (
        <VersionMark
            severity={versionMarkData.severity}
            update={
                wellKnownConfig && versionMarkData.severity !== severities.SUCCESS && appStore.version.latest_url
                    ? {
                          text: _(t.clickHere),
                          onClick: (e) => {
                              e.preventDefault()
                              window.open(appStore.version.latest_url, '_blank')
                          },
                      }
                    : undefined
            }
            versionText={versionMarkData.text}
        />
    )
}

export default FooterVersion
