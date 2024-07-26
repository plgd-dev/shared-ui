import { FC, forwardRef, useEffect, useState } from 'react'
import { default as ReactDatePicker, ReactDatePickerCustomHeaderProps } from 'react-datepicker'
import isFunction from 'lodash/isFunction'

import 'react-datepicker/dist/react-datepicker.css'

import { Props } from './DatePicker.types'
import FormInput from '../FormInput'
import IconCalendar from '../Icon/components/IconCalendar'
import * as styles from './DatePicker.styles'
import IconArrowLeft from '../Icon/components/IconArrowLeft'
import IconArrowRight from '../Icon/components/IconArrowRight'
import { convertSize } from '../Icon'
import Button, { buttonSizes, buttonVariants } from '../Button'

const DatePicker: FC<Props> = (props) => {
    const { bottomButtons, className, children, compactFormComponentsView, dataTestId, defaultValue, id, i18n, locale, onChange, value, ...rest } = props
    const [startDate, setStartDate] = useState<Date | null>(defaultValue ?? new Date())
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (value) {
            setStartDate(value)
        }
    }, [value])

    const Input = forwardRef(({ value, onClick }: any, ref) => (
        <FormInput
            compactFormComponentsView={compactFormComponentsView}
            icon={
                <IconCalendar
                    onClick={() => {
                        onClick()
                        setOpen(true)
                    }}
                />
            }
            inputRef={ref}
            onChange={() => {}}
            onClick={() => {
                onClick()
                setOpen(true)
            }}
            value={value}
        />
    ))

    const Header = (headerRenderProps: ReactDatePickerCustomHeaderProps) => {
        const { monthDate, decreaseMonth, increaseMonth, nextMonthButtonDisabled, prevMonthButtonDisabled } = headerRenderProps

        return (
            <div css={styles.header} data-test-id={dataTestId?.concat('-header')}>
                <div css={styles.title}>
                    {monthDate.toLocaleString('en-US', {
                        month: 'long',
                        year: 'numeric',
                    })}
                </div>
                <div css={styles.arrows}>
                    <button
                        aria-label='Previous Month'
                        css={[styles.arrow, prevMonthButtonDisabled && styles.arrowDisabled]}
                        data-test-id={dataTestId?.concat('-header-arrow-left')}
                        onClick={decreaseMonth}
                    >
                        <IconArrowLeft {...convertSize(12)} />
                    </button>
                    <button
                        aria-label='Next Month'
                        css={[styles.arrow, nextMonthButtonDisabled && styles.arrowDisabled]}
                        data-test-id={dataTestId?.concat('-header-arrow-right')}
                        onClick={increaseMonth}
                    >
                        <IconArrowRight {...convertSize(12)} />
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className={className} css={styles.datePicker} data-test-id={dataTestId} id={id}>
            <ReactDatePicker
                {...rest}
                disabledKeyboardNavigation
                customInput={<Input />}
                locale={locale}
                onSelect={(date) => {
                    setStartDate(date)
                    isFunction(onChange) && onChange(date)
                }}
                open={open}
                renderCustomHeader={(headerRenderPros) => <Header {...headerRenderPros} />}
                selected={startDate}
                shouldCloseOnSelect={false}
                showPopperArrow={false}
                wrapperClassName='react-date-picker'
            >
                {bottomButtons && (
                    <div css={styles.buttons}>
                        <Button
                            onClick={() => {
                                setStartDate(defaultValue ?? new Date())
                                setOpen(false)
                            }}
                            size={buttonSizes.SMALL}
                            variant={buttonVariants.TERTIARY}
                        >
                            {i18n?.clear}
                        </Button>
                        <Button onClick={() => setOpen(false)} size={buttonSizes.SMALL} variant={buttonVariants.PRIMARY}>
                            {i18n?.confirm}
                        </Button>
                    </div>
                )}
            </ReactDatePicker>
        </div>
    )
}

DatePicker.displayName = 'DatePicker'

export default DatePicker
