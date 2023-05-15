import { defaultProps as ModalDefaultProps, Props as ModalProps } from '../../Modal.types'

export type DeviceInformationLineType = {
    attribute: string
    certFormat?: boolean
    copyValue?: string
    value: string
}

export type Props = ModalProps & {
    defaultDeviceIp?: string
    defaultDeviceName?: string
    deviceAuthCode?: string
    deviceAuthLoading?: boolean
    deviceInformation?: DeviceInformationLineType[]
    getDeviceAuthCode: (deviceName: string, deviceIp: string) => void
}

export type Inputs = {
    deviceName: string
    deviceIp: string
}

export const defaultProps = {
    ...ModalDefaultProps,
}
