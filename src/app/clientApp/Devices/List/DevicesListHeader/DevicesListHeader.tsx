import { FC, memo } from 'react'
import { useIntl } from 'react-intl'

import { IconEdit, IconRefresh } from '../../../../../components/Atomic/Icon'
import SplitButton from '../../../../../components/Atomic/SplitButton'
import { messages as t } from '../../Devices.i18n'

import FindNewDeviceByIp from '../FindNewDeviceByIp'
import { Props } from './DevicesListHeader.types'

const DevicesListHeader: FC<Props> = memo((props) => {
    const { loading, refresh, openTimeoutModal } = props
    const { formatMessage: _ } = useIntl()

    return (
        <div className='d-flex align-items-center'>
            <FindNewDeviceByIp disabled={loading} />
            <SplitButton
                disabled={loading}
                icon={<IconRefresh />}
                items={[
                    {
                        onClick: openTimeoutModal,
                        label: _(t.changeTimeout),
                        icon: <IconEdit />,
                    },
                ]}
                onClick={refresh}
            >
                {_(t.discovery)}
            </SplitButton>
        </div>
    )
})

DevicesListHeader.displayName = 'DevicesListHeader'

export default DevicesListHeader
