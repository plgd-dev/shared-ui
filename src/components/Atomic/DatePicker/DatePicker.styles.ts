import { css } from '@emotion/react'
import { getTheme, getThemeColor, ThemeType } from '../_theme'
import { fontPrimary } from '../_utils/commonStyles'

export const datePicker = (theme: ThemeType) => css`
    width: 100%;

    .react-date-picker {
        display: block;
    }

    .react-datepicker__month-container {
        float: none;
    }

    .react-datepicker {
        font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
        border: 1px solid ${getThemeColor(theme, `DatePicker.borderColor`)};
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 30px 40px 0 rgba(28, 52, 99, 0.1);
        background: ${getThemeColor(theme, `DatePicker.background`)};
    }

    .react-datepicker__header {
        background-color: transparent;
        padding: 0;
        border: 0;
    }

    .react-datepicker__day-names {
        margin-bottom: 0;
        display: flex;
        justify-content: space-between;
    }

    .react-datepicker__day-name {
        color: ${getThemeColor(theme, `DatePicker.header.day.color`)};
        font-weight: 400;
    }

    .react-datepicker__children-container {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        margin: 0;
        font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
        font-size: 12px;
        font-style: normal;
        line-height: 18px;
        border-radius: 8px;
    }

    .react-datepicker__day {
        color: ${getThemeColor(theme, `DatePicker.day.color`)};
        font-weight: 600;
        transition: all 0.3s;

        &:hover:not(&.react-datepicker__day--disabled):not(&.react-datepicker__day--selected) {
            background: ${getThemeColor(theme, `DatePicker.day.hover.background`)};
            color: ${getThemeColor(theme, `DatePicker.day.hover.color`)};
            border-radius: 8px !important;
        }
    }

    .react-datepicker__day--disabled {
        color: ${getThemeColor(theme, `DatePicker.day.disabled.color`)};
    }

    .react-datepicker__day--today {
        color: ${getThemeColor(theme, `DatePicker.day.today.color`)};
    }

    .react-datepicker__day--selected {
        background: ${getThemeColor(theme, `DatePicker.day.selected.background`)}!important;
        color: ${getThemeColor(theme, `DatePicker.day.selected.color`)}!important;
        border-radius: 8px !important;
    }

    .react-datepicker__month {
        margin: 0;
    }

    .react-datepicker__week {
        display: flex;
        justify-content: space-between;
    }
`

export const header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
`

export const title = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    color: ${getThemeColor(theme, `DatePicker.header.title.color`)};
`

export const arrows = css`
    display: flex;
    gap: 8px;
`

export const arrow = (theme: ThemeType) => css`
    display: block;
    background: transparent;
    border: none;
    padding: 4px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: all 0.3s;
    color: ${getThemeColor(theme, `DatePicker.header.arrow.color`)};

    &:hover {
        color: ${getThemeColor(theme, `DatePicker.header.arrow.hover.color`)};
    }
`

export const arrowDisabled = (theme: ThemeType) => css`
    cursor: not-allowed;

    &:hover {
        color: ${getThemeColor(theme, `DatePicker.header.arrow.color`)};
    }
`

export const buttons = css`
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
`
