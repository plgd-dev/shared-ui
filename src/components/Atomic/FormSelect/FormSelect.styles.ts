import { css } from '@emotion/react'

import { FormSelectSizeType } from './FormSelect.types'
import { ThemeType, get } from '../_theme'

export const select = (theme: ThemeType, size: FormSelectSizeType, disabled?: boolean) => css`
    .select__control {
        .select__value-container {
            .select__placeholder,
            .select__input-container {
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                color: ${get(theme, `FormSelect.input.color`)}!important;

                input {
                    font-family: 'Poppins', sans-serif !important;
                    font-style: normal !important;
                    font-weight: 400 !important;
                    font-size: 14px !important;
                    line-height: 22px !important;
                    color: ${get(theme, `FormSelect.input.color`)}!important;
                }
            }
        }

        &.select__control--menu-is-open {
            ${!disabled &&
            css`
                border: 1px solid ${get(theme, `FormSelect.menu.open.borderColor`)};
            `}
        }

        &.select__control--is-focused {
            box-shadow: none;
        }
    }

    .select__indicator-separator {
        display: none;
    }

    .select__input-container {
        margin: 0;
    }
`

export const control = (theme: ThemeType) => css`
    height: 44px;
    min-height: 44px;
    border-radius: 8px;
    box-shadow: none;
    transition: all 0.3s;
    border: 1px solid ${get(theme, `FormSelect.control.borderColor`)};
    background: ${get(theme, `FormSelect.control.background`)};

    &:focus {
        outline: none;
    }

    &:hover {
        outline: none;
        border: 1px solid ${get(theme, `FormSelect.control.hover.borderColor`)};
    }
`

export const inlineStyle = (theme: ThemeType) => css`
    border-color: transparent;

    &:hover {
        border-color: ${get(theme, `FormSelect.control.borderColor`)};
    }
`

export const small = css`
    height: 36px;
    min-height: 36px;
`

export const error = (theme: ThemeType) => css`
    border-color: ${get(theme, `FormSelect.error.color`)} !important;
`

export const menu = (theme: ThemeType) => css`
    width: auto !important;
    margin-top: 4px;
    margin-bottom: 4px;
    border: 1px solid ${get(theme, `FormSelect.menu.borderColor`)};
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    background: ${get(theme, `FormSelect.menu.background`)};
`

export const menuList = css`
    text-align: left;
    padding: 8px 0;
`

export const option = (theme: ThemeType) => css`
    color: ${get(theme, `FormSelect.option.color`)};
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    font-size: 14px;
    display: flex;
    align-items: center;
    background: transparent;
    transition: all 0.3s;
    cursor: pointer;
    padding: 8px 16px;

    &:hover {
        color: ${get(theme, `FormSelect.option.hover.color`)};
        background: transparent;
    }

    &:active {
        background: transparent;
    }
`

export const optionRight = css`
    justify-content: flex-end;
`

export const optionSelected = (theme: ThemeType) => css`
    color: ${get(theme, `FormSelect.optionSelected.color`)};
    background: transparent;
`

export const selectContainer = css`
    width: 100%;
`

export const selectAutoWidthContainer = css`
    display: inline-flex;
`

export const valueContainer = css`
    padding: 0 0 0 15px; // -1 for border
`

export const value = (theme: ThemeType) => css`
    color: ${get(theme, `FormSelect.value.color`)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
`

export const dropdownIndicator = css`
    //padding-right: 16px;
    padding: 4px 16px 4px 4px;
`

export const indicator = (theme: ThemeType) => css`
    transition: all 0.3s;
    color: ${get(theme, `FormSelect.indicator.color`)};
`

export const indicatorOpen = css`
    transform: rotate(180deg);
`

export const placeholder = (theme: ThemeType) => css`
    color: ${get(theme, `FormSelect.placeholder.color`)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`

export const textRight = css`
    text-align: right;
`

export const disabled = (theme: ThemeType) => css`
    color: ${get(theme, `FormSelect.disabled.color`)};
`

export const input = css`
    display: flex;
    justify-content: flex-end;

    input {
        text-align: right;
        width: 100% !important;
    }

    &:after {
        display: none !important;
        content: '' !important;
    }
`
