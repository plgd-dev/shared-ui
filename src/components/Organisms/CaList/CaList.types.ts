import { Props as FormGroupProps } from '../../Atomic/FormGroup/FormGroup.types'

export type DataType = {
    id: number
    data: any
    dataChain: string
    name: string
}

export type Props = {
    actions?: {
        onDownload?: (id: number) => void
        onDelete?: (id: number) => void
        onView?: (id: number) => void
    }
    data: DataType[]
    formGroupProps?: Omit<FormGroupProps, 'id' | 'children'> & { id?: string }
    i18n: {
        title?: string
        download: string
        delete: string
        view: string
    }
    largePadding?: boolean
}
