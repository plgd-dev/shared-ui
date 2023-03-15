import { defaultProps as ModalDefaultProps, Props as ModalProps } from '../../Modal.types'

export type DeviceInformationLineType = {
    attribute: string
    certFormat?: boolean
    copyValue?: string
    value: string
}

export type Props = ModalProps & {
    defaultDeviceId?: string
    deviceAuthCode?: string
    deviceAuthLoading?: boolean
    deviceInformation?: DeviceInformationLineType[]
    getDeviceAuthCode: (deviceId: string) => void
    i18n: {
        deviceId: string
        enterDeviceID: string
        invalidUuidFormat: string
        getTheCode: string
        deviceInformation: string
    }
}

export type Inputs = {
    deviceId: string
}

export const defaultProps = {
    ...ModalDefaultProps,
}
