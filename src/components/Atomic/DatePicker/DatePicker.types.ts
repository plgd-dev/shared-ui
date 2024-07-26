import React from 'react'
import { DatePickerProps } from 'react-datepicker'

export type Props = {
    bottomButtons?: boolean
    className?: string
    compactFormComponentsView?: boolean
    dataTestId?: string
    defaultValue?: Date | null
    id?: string
    i18n?: {
        clear: string
        confirm: string
    }
    locale?: string
    onChange?: (date: Date | null, event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void
    value?: Date | null
} & DatePickerProps

export const defaultProps: Partial<Props> = {
    locale: 'en-GB',
}
