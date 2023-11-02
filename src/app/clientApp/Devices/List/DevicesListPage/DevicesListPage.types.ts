import { ResourcesType } from '../../Devices.types'
import { BreadcrumbItem } from '../../../../../components/Layout/Header/Breadcrumbs/Breadcrumbs.types'
import { RemoteClientType } from '../../../RemoteClients/RemoteClients.types'

export type DpsDataType = {
    deviceId: string
    resources: ResourcesType[] | undefined
}

export type Props = {
    breadcrumbs?: BreadcrumbItem[]
    clientData?: RemoteClientType
    defaultActiveTab?: number
    detailLinkPrefix?: string
    httpGatewayAddress?: string
    initializedByAnother?: boolean
    reInitializationError?: boolean
    reInitializationLoading?: boolean
    title?: string
}

export const defaultProps = {
    detailLinkPrefix: '',
}
