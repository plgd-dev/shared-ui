import { FC } from 'react'
import { useIntl } from 'react-intl'

import { Props } from './Tab2.types'
import SimpleStripTable from '../../../../../../components/Atomic/SimpleStripTable'
import { messages as t } from '../../../../RemoteClients/RemoteClients.i18n'

const Tab1: FC<Props> = (props) => {
    const { clientData } = props
    const { formatMessage: _ } = useIntl()

    const rows = clientData
        ? [
              {
                  attribute: _(t.deviceAuthenticationMode),
                  value: clientData.authenticationMode,
              },
              {
                  attribute: _(t.version),
                  value: clientData.version,
              },
          ]
        : []

    return (
        <div
            style={{
                paddingTop: 8,
                overflow: 'hidden',
            }}
        >
            <SimpleStripTable rows={rows} />
        </div>
    )
}

Tab1.displayName = 'Tab2'

export default Tab1
