import { useIntl } from 'react-intl'

import { messages as t } from '../App/App.i18n'
import { getWellKnowConfig } from '../utils'

const MockApp = () => {
    const { formatMessage: _ } = useIntl()
    const wellKnowConfig = getWellKnowConfig()

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <div style={{ fontSize: 16 }}>
                {_(t.mockPart1)}&nbsp;
                <strong>{wellKnowConfig.remoteProvisioning?.authority}</strong>
                {_(t.mockPart2)}
            </div>
        </div>
    )
}

MockApp.displayName = 'MockApp'

export default MockApp
