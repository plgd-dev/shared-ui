import { defaultProps as ModalDefaultProps, Props as ModalProps } from '../../Modal.types'
import { ReactNode } from 'react'

type DeleteInformationType = {
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
