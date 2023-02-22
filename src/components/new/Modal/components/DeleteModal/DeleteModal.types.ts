import { defaultProps as ModalDefaultProps, Props as ModalProps } from '../../Modal.types'

type DeleteInformationType = {
    label: string
    value: string
}

export type Props = ModalProps & {
    deleteInformation: DeleteInformationType[]
    subTitle: string
}

export const defaultProps = {
    ...ModalDefaultProps,
}
