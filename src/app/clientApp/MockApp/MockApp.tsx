import { useIntl } from 'react-intl'
import { useState } from 'react'

import { messages as t } from './MockApp.i18n'
import { getWellKnowConfig, getClientUrl } from '../utils'
import { DEVICE_AUTH_CODE_REMOTE_CLIENT_ID } from '../constants'
import { useClientAppPage } from '../RemoteClients/use-client-app-page'
import { clientAppSetings, security } from '../../../common/services'
import { useWellKnownConfiguration } from '../../../common/hooks'

const MockApp = () => {
    const { formatMessage: _ } = useIntl()
    const wellKnowConfigHub = getWellKnowConfig()

    const remoteClientId = localStorage.getItem(DEVICE_AUTH_CODE_REMOTE_CLIENT_ID)
    const hubWellKnownConfig = security.getWellKnowConfig()

    const [clientData, error, errorElement] = useClientAppPage({
        i18n: {
            notFoundRemoteClientMessage: _(t.notFoundRemoteClientMessage),
            pageNotFound: _(t.pageNotFound),
        },
        clientId: remoteClientId ?? undefined,
    })
    const [httpGatewayAddress] = useState(getClientUrl(clientData?.clientUrl))
    const [wellKnownConfig, setWellKnownConfig, reFetchConfig, wellKnownConfigError] = useWellKnownConfiguration(httpGatewayAddress, hubWellKnownConfig)

    clientAppSetings.setGeneralConfig({
        httpGatewayAddress,
    })

    if (error && remoteClientId) {
        return errorElement
    }

    if (wellKnownConfigError && remoteClientId) {
        return <div className='client-error-message'>{wellKnownConfigError?.message}</div>
    }

    const config = remoteClientId ? wellKnownConfig : wellKnowConfigHub

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <div style={{ fontSize: 16, padding: 20 }}>
                {_(t.mockPart1)}&nbsp;
                <strong>{config?.remoteProvisioning?.authority}</strong>
                {_(t.mockPart2)}
            </div>
        </div>
    )
}

MockApp.displayName = 'MockApp'

export default MockApp
