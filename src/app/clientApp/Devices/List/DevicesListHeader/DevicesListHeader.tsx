import { FC, memo } from 'react'
import { useIntl } from 'react-intl'

import { IconEdit, IconRefresh, IconTrash } from '../../../../../components/Atomic/Icon'
import SplitButton from '../../../../../components/Atomic/SplitButton'
import Button from '../../../../../components/Atomic/Button'
import { messages as t } from '../../Devices.i18n'

import FindNewDeviceByIp from '../FindNewDeviceByIp'
import { Props } from './DevicesListHeader.types'
import * as styles from './DevicesListHeader.styles'

const DevicesListHeader: FC<Props> = memo((props) => {
    const { loading, refresh, openTimeoutModal, handleFlushDevices, i18n } = props
    const { formatMessage: _ } = useIntl()

    return (
        <div css={styles.list}>
            <FindNewDeviceByIp disabled={loading} />
            <SplitButton
                css={styles.leftSpace}
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
            <Button css={styles.leftSpace} disabled={loading} icon={<IconTrash />} onClick={handleFlushDevices}>
                {i18n.flushCache}
            </Button>
        </div>
    )
})

DevicesListHeader.displayName = 'DevicesListHeader'

export default DevicesListHeader
