import { ResourcesType } from '../../Devices.types'
import { BreadcrumbItem } from '../../../../../components/Layout/Header/Breadcrumbs/Breadcrumbs.types'

export type DpsDataType = {
    deviceId: string
    resources: ResourcesType[] | undefined
}

export type Props = {
    breadcrumbs?: BreadcrumbItem[]
    detailLinkPrefix?: string
    httpGatewayAddress?: string
    title?: string
}

export const defaultProps = {
    detailLinkPrefix: '',
}
