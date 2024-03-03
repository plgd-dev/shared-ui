import { FC, useEffect, useMemo, useState } from 'react'
import { useIntl } from 'react-intl'

import SimpleStripTable from '../../../../../../components/Atomic/SimpleStripTable'
import TagGroup, { justifyContent } from '../../../../../../components/Atomic/TagGroup'
import Tag from '../../../../../../components/Atomic/Tag'
import { DEVICE_PROVISION_STATUS_DELAY_MS } from '../../../constants'
import { IconLoader } from '../../../../../../components/Atomic/Loader'
import { getColorByOnboardingStatus, getColorByProvisionStatus, getDPSEndpoint, loadResourceData } from '../../../utils'
import { messages as t } from '../../../Devices.i18n'
import { messages as app } from '../../../../App/App.i18n'
import { Props } from './Tab1.types'
import testId from '../../../../testId'
import StatusTag from '../../../../../../components/Atomic/StatusTag/StatusTag'
import { TagTypeType } from '../../../../../../components/Atomic/StatusTag/StatusTag.types'

const Tab1: FC<Props> = (props) => {
    const { data, deviceId, deviceOnboardingResourceData, isOwned, isUnsupported, resources, onboardResourceLoading } = props
    const { formatMessage: _ } = useIntl()

    const { onboardTitleStatus } = testId.devices.detail

    const [resourceLoading, setResourceLoading] = useState(false)
    const [deviceResourceData, setDeviceResourceData] = useState<any>(undefined)

    const provisionStatus = deviceResourceData?.content?.provisionStatus
    const onboardingStatus = deviceOnboardingResourceData?.content?.cps || 'n/a'
    const dpsEndpoint = useMemo(() => getDPSEndpoint(resources), [resources])

    useEffect(() => {
        if (dpsEndpoint && isOwned && !deviceResourceData) {
            setResourceLoading(true)
            setTimeout(() => {
                loadResourceData({
                    href: dpsEndpoint.href,
                    deviceId,
                    errorCallback: () => {
                        setResourceLoading(false)
                    },
                }).then((rData) => {
                    setDeviceResourceData(rData)
                    setResourceLoading(false)
                })
            }, DEVICE_PROVISION_STATUS_DELAY_MS)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dpsEndpoint, isOwned, deviceResourceData])

    const rows = [
        { attribute: _(t.id), value: deviceId },
        {
            attribute: _(t.types),
            value: data?.types ? (
                <TagGroup
                    i18n={{
                        more: _(app.more),
                        modalHeadline: _(app.types),
                    }}
                    justifyContent={justifyContent.END}
                >
                    {data?.types.map((t, key) => <Tag key={key}>{t}</Tag>)}
                </TagGroup>
            ) : (
                <div>-</div>
            ),
        },
        {
            attribute: _(t.ownershipStatus),
            value: <StatusTag variant={isOwned ? 'success' : 'error'}>{isOwned ? _(t.owned) : _(t.unowned)}</StatusTag>,
            hidden: isUnsupported,
        },
        {
            attribute: _(t.onboardingStatus),
            value: onboardResourceLoading ? (
                <IconLoader size={20} type='secondary' />
            ) : (
                <StatusTag data-test-id={onboardTitleStatus} variant={getColorByOnboardingStatus(onboardingStatus) as TagTypeType}>
                    {onboardingStatus}
                </StatusTag>
            ),
        },
        {
            attribute: _(t.dpsStatus),
            value: resourceLoading ? (
                <IconLoader size={20} type='secondary' />
            ) : (
                <StatusTag variant={isOwned ? (getColorByProvisionStatus(provisionStatus) as TagTypeType) : 'normal'}>
                    {isOwned && deviceResourceData ? provisionStatus : _(t.notAvailable)}
                </StatusTag>
            ),
            hidden: !dpsEndpoint,
        },
        {
            attribute: _(t.endpoints),
            value: data?.endpoints ? (
                <TagGroup
                    i18n={{
                        more: _(app.more),
                        modalHeadline: _(app.types),
                    }}
                    justifyContent={justifyContent.END}
                >
                    {data?.endpoints?.map?.((endpoint: string) => <Tag key={endpoint}>{endpoint}</Tag>)}
                </TagGroup>
            ) : (
                <div>-</div>
            ),
        },
    ]

    return (
        <div
            style={{
                paddingTop: 8,
                overflow: 'hidden',
            }}
        >
            <SimpleStripTable rows={rows.filter((r) => r?.hidden === false || r?.hidden === undefined)} />
        </div>
    )
}

Tab1.displayName = 'Tab1'

export default Tab1
