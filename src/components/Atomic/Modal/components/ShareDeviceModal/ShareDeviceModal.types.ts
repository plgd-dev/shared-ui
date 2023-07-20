import { Props as ModalProps, defaultProps as ModalDefaultProps } from '../../Modal.types'

export type AlreadySharedItemType = {
    name: string
    email: string
    image: string
}

export type Props = ModalProps & {
    alreadyShared?: AlreadySharedItemType[]
    onRemoveShared: (id: string) => void
    onAddShared: (item: AlreadySharedItemType) => void
}

export type Inputs = {
    Email: string
}

export const defaultProps = {
    ...ModalDefaultProps,
}
