export type SwitcherSizeType = 'small' | 'big'

export type Props = {
    checked?: boolean
    defaultChecked?: boolean
    disabled?: boolean
    id?: string
    label: string
    labelBefore?: boolean
    onChange?: (e: any) => void
    size?: SwitcherSizeType
    className?: string
}

export const defaultProps: Partial<Props> = {
    size: 'big',
    labelBefore: false,
}
