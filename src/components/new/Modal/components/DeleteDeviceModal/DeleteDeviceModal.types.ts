import { defaultProps as ModalDefaultProps, Props as ModalProps } from '../../Modal.types'

export type Props = ModalProps & {
    deviceId: string
    deviceIdLabel?: string
    deviceName: string
    deviceNameLabel?: string
    subTitle: string
}

export const defaultProps = {
    ...ModalDefaultProps,
    deviceIdLabel: 'Device ID',
    deviceNameLabel: 'Device name',
}
