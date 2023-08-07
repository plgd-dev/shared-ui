import { DevicesResourcesModalType } from '../../../../../components/Organisms/DevicesResourcesModal/DevicesResourcesModal.types'
import { BreadcrumbItem } from '../../../../../components/Layout/Header/Breadcrumbs/Breadcrumbs.types'

export type Props = {
    breadcrumbs?: BreadcrumbItem[]
    defaultActiveTab?: number
    defaultDeviceId?: string
    detailLinkPrefix?: string
}

export type DevicesDetailsResourceModalData = {
    data: {
        deviceId?: string
        href?: string
        interfaces?: string[]
        types: string[]
    }
    resourceData: any
    type?: DevicesResourcesModalType
}
