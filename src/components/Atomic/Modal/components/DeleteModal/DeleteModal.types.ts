import { defaultProps as ModalDefaultProps, Props as ModalProps } from '../../Modal.types'
import { ReactNode } from 'react'

export type DeleteInformationType = {
    label: string
    value: ReactNode
}

export type Props = ModalProps & {
    deleteInformation?: DeleteInformationType[]
    subTitle: ReactNode
}

export const defaultProps = {
    ...ModalDefaultProps,
}
