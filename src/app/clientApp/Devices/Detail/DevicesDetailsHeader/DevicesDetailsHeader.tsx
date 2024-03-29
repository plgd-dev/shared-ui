import { FC, memo, useMemo, useRef } from 'react'
import { useIntl } from 'react-intl'
import { useSelector } from 'react-redux'

import SplitButton from '../../../../../components/Atomic/SplitButton'
import Button from '../../../../../components/Atomic/Button'
import { IconClose, IconEdit, IconNetwork, IconPlus } from '../../../../../components/Atomic/Icon'
import { isNotificationActive } from '../../slice'
import { devicesOnboardingStatuses } from '../../constants'
import { canBeOwned, canChangeDeviceName, canSetDPSEndpoint, getDeviceNotificationKey } from '../../utils'
import { messages as t } from '../../Devices.i18n'
import { Props } from './DevicesDetailsHeader.types'
import testId from '../../../testId'
import * as styles from './DevicesDetailsHeader.styles'

export const DevicesDetailsHeader: FC<Props> = memo((props) => {
    const {
        buttonsLoading,
        deviceId,
        isUnregistered,
        onOwnChange,
        isOwned,
        isUnsupported,
        resources,
        openDpsModal,
        onboardResourceLoading,
        onboardButtonCallback,
        deviceOnboardingResourceData,
        incompleteOnboardingData,
        openOnboardingModal,
        handleOpenEditDeviceNameModal,
    } = props
    const { formatMessage: _ } = useIntl()
    const deviceNotificationKey = getDeviceNotificationKey(deviceId)
    const notificationsEnabled = useRef(false)
    notificationsEnabled.current = useSelector(isNotificationActive(deviceNotificationKey))

    const hasDPS = useMemo(() => canSetDPSEndpoint(resources), [resources])
    const canUpdate = useMemo(() => canChangeDeviceName(resources) && isOwned, [resources, isOwned])
    const hasOwnButton = useMemo(() => canBeOwned(resources), [resources])

    const hasOnboardButton = deviceOnboardingResourceData?.content?.cps
    const isOnboarded = hasOnboardButton !== devicesOnboardingStatuses.UNINITIALIZED
    const { offboardButton, onboardButton, onboardButtonDropdown } = testId.devices.detail

    return (
        <div css={styles.header}>
            {canUpdate && (
                <Button
                    disabled={isUnregistered}
                    icon={<IconEdit />}
                    loading={buttonsLoading}
                    onClick={handleOpenEditDeviceNameModal}
                    style={{ marginLeft: 8 }}
                    variant='tertiary'
                >
                    {_(t.editName)}
                </Button>
            )}
            {hasOnboardButton && (incompleteOnboardingData || isOnboarded) && (
                <Button
                    dataTestId={isOnboarded ? offboardButton : onboardButton}
                    disabled={onboardResourceLoading}
                    icon={isOnboarded ? <IconClose /> : <IconPlus />}
                    loading={onboardResourceLoading || buttonsLoading}
                    onClick={onboardButtonCallback}
                    variant='tertiary'
                >
                    {isOnboarded ? _(t.offboardDevice) : _(t.onboardDevice)}
                </Button>
            )}
            {hasOnboardButton && !incompleteOnboardingData && hasOnboardButton === devicesOnboardingStatuses.UNINITIALIZED && (
                <div className='m-r-10'>
                    <SplitButton
                        dataTestId={isOnboarded ? offboardButton : onboardButton}
                        dataTestIdDropdown={onboardButtonDropdown}
                        disabled={onboardResourceLoading}
                        icon={<IconPlus />}
                        items={[
                            {
                                onClick: openOnboardingModal,
                                label: _(t.changeOnboardingData),
                                icon: <IconEdit />,
                            },
                        ]}
                        loading={onboardResourceLoading || buttonsLoading}
                        menuProps={{
                            placement: 'bottom-end',
                        }}
                        onClick={onboardButtonCallback}
                        variant='tertiary'
                    >
                        {_(t.onboardDevice)}
                    </SplitButton>
                </div>
            )}
            {hasOwnButton && !isUnsupported && (
                <Button
                    disabled={isUnregistered}
                    icon={isOwned ? <IconClose /> : <IconPlus />}
                    loading={buttonsLoading}
                    onClick={onOwnChange}
                    variant='tertiary'
                >
                    {isOwned ? _(t.disOwnDevice) : _(t.ownDevice)}
                </Button>
            )}
            {hasDPS && (
                <Button className='m-l-10' disabled={!isOwned} icon={<IconNetwork />} loading={buttonsLoading} onClick={openDpsModal} variant='tertiary'>
                    {_(t.setDpsEndpoint)}
                </Button>
            )}
        </div>
    )
})

DevicesDetailsHeader.displayName = 'DevicesDetailsHeader'

export default DevicesDetailsHeader
