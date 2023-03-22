export type SwitcherSizeType = 'small' | 'big'

export type Props = {
    checked?: boolean
    className?: string
    defaultChecked?: boolean
    disabled?: boolean
    id?: string
    label?: string
    labelBefore?: boolean
    loading?: boolean
    onChange?: (e: any) => void
    size?: SwitcherSizeType
}

export const defaultProps: Partial<Props> = {
    labelBefore: false,
    size: 'big',
}
