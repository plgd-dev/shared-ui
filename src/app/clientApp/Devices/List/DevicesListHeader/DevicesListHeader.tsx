import { FC, memo } from 'react'
import { useIntl } from 'react-intl'

import { IconEdit, IconRefresh, IconTrash } from '../../../../../components/Atomic/Icon'
import SplitButton from '../../../../../components/Atomic/SplitButton'
import Button from '../../../../../components/Atomic/Button'
import { messages as t } from '../../Devices.i18n'

import FindNewDeviceByIp from '../FindNewDeviceByIp'
import { Props } from './DevicesListHeader.types'

const DevicesListHeader: FC<Props> = memo((props) => {
    const { loading, refresh, openTimeoutModal, handleFlashDevices, i18n } = props
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
            <Button className='m-l-10' disabled={loading} icon={<IconTrash />} onClick={handleFlashDevices}>
                {i18n.flushCache}
            </Button>
        </div>
    )
})

DevicesListHeader.displayName = 'DevicesListHeader'

export default DevicesListHeader
