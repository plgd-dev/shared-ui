import { DevicesResourcesModalParamsType } from '../../../../components/Organisms/DevicesResourcesModal/DevicesResourcesModal.types'
import { ResourcesType } from '../Devices.types'

export type Props = {
    onClose?: () => void
    resources?: ResourcesType[]
    show: boolean
    updateResource?: (params: DevicesResourcesModalParamsType, resourceDataUpdate: any) => void | Promise<void>
}

export const defaultProps = {
    show: false,
}
