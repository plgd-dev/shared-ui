import { FC, forwardRef, useEffect, useState } from 'react'
import { default as ReactDatePicker } from 'react-datepicker'
import isFunction from 'lodash/isFunction'

import { Props } from './DatePicker.types'

import 'react-datepicker/dist/react-datepicker.css'
import FormInput from '../FormInput'
import IconCalendar from '../Icon/components/IconCalendar'
import * as styles from './DatePicker.styles'

const DatePicker: FC<Props> = (props) => {
    const { className, compactFormComponentsView, dataTestId, defaultValue, id, locale, onChange, value } = props
    const [startDate, setStartDate] = useState<Date | null>(defaultValue ?? new Date())

    useEffect(() => {
        if (value) {
            setStartDate(value)
        }
    }, [value])

    const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref) => (
        <FormInput
            compactFormComponentsView={compactFormComponentsView}
            icon={<IconCalendar onClick={onClick} />}
            inputRef={ref}
            onChange={() => {}}
            onClick={onClick}
            value={value}
        />
    ))

    return (
        <div className={className} css={styles.datePicker} data-test-id={dataTestId} id={id}>
            <ReactDatePicker
                customInput={<ExampleCustomInput />}
                locale={locale}
                onChange={(date) => {
                    setStartDate(date)
                    isFunction(onChange) && onChange(date)
                }}
                selected={startDate}
                wrapperClassName='react-date-picker'
            />
        </div>
    )
}

DatePicker.displayName = 'DatePicker'

export default DatePicker
