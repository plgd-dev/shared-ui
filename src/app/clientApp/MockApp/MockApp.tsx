import { useIntl } from 'react-intl'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { detect } from 'detect-browser'

import { messages as t } from './MockApp.i18n'
import { getWellKnownConfig, getClientUrl } from '../utils'
import { DEVICE_AUTH_CODE_DEVICE_ID, DEVICE_AUTH_CODE_REMOTE_CLIENT_ID, DEVICE_AUTH_CODE_SESSION_KEY } from '../constants'
import { useClientAppPage } from '../RemoteClients/use-client-app-page'
import { clientAppSettings, security } from '../../../common/services'
import { useWellKnownConfiguration } from '../../../common/hooks'
import { isEdge } from '../../../components/Atomic/_utils/browser'

const MockApp = () => {
    const { formatMessage: _ } = useIntl()
    const wellKnowConfigHub = getWellKnownConfig()
    const [searchParams] = useSearchParams()
    const code = searchParams.get('code')

    const remoteClientId = localStorage.getItem(DEVICE_AUTH_CODE_REMOTE_CLIENT_ID)
    const deviceId = localStorage.getItem(DEVICE_AUTH_CODE_DEVICE_ID)
    const hubWellKnownConfig = security.getWellKnownConfig()
    const isEdgeBrowser = isEdge(detect())

    const [clientData, error, errorElement] = useClientAppPage({
        i18n: {
            notFoundRemoteClientMessage: _(t.notFoundRemoteClientMessage),
            pageNotFound: _(t.pageNotFound),
        },
        clientId: remoteClientId ?? undefined,
    })
    const [httpGatewayAddress] = useState(clientData ? getClientUrl(clientData?.clientUrl) : '')
    const hubWellKnowConfigUrl = useMemo(() => process.env.REACT_APP_HTTP_WELL_KNOW_CONFIGURATION_ADDRESS || window.location.origin, [])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [wellKnownConfig, _setWellKnownConfig, _reFetchConfig, wellKnownConfigError] = useWellKnownConfiguration(
        httpGatewayAddress || hubWellKnowConfigUrl,
        hubWellKnownConfig
    )

    if (code) {
        localStorage.setItem(DEVICE_AUTH_CODE_SESSION_KEY, code)
    }

    if (deviceId && remoteClientId && !isEdgeBrowser) {
        setTimeout(() => {
            window.location.replace(`${window.location.origin}/remote-clients/${remoteClientId}/devices/${deviceId}`)
        }, 500)
    }

    clientAppSettings.setGeneralConfig({
        httpGatewayAddress,
    })

    if (error && remoteClientId) {
        return errorElement
    }

    if (wellKnownConfigError && remoteClientId) {
        return <div className='client-error-message'>{wellKnownConfigError?.message}</div>
    }

    // @ts-ignore
    const authority = remoteClientId ? wellKnownConfig?.remoteProvisioning?.authority : wellKnowConfigHub?.authority

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <div style={{ fontSize: 16, padding: 20 }}>
                {_(t.mockPart1)}&nbsp;
                <strong>{authority}</strong>
                {_(t.mockPart2)}
            </div>
        </div>
    )
}

MockApp.displayName = 'MockApp'

export default MockApp
