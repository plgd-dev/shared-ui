import { css } from '@emotion/react'

import { FormSelectSizeType } from './FormSelect.types'
import { ThemeType, getThemeColor, getTheme } from '../_theme'
import { fontPrimary } from '../_utils/commonStyles'

export const control = (theme: ThemeType) => css`
    height: 44px;
    min-height: 44px;
    border-radius: 8px;
    box-shadow: none;
    transition: all 0.3s;
    border: 1px solid ${getThemeColor(theme, `FormSelect.control.borderColor`)};
    background: ${getThemeColor(theme, `FormSelect.control.background`)};

    &:focus {
        outline: none;
    }

    &:hover {
        outline: none;
        border: 1px solid ${getThemeColor(theme, `FormSelect.control.hover.borderColor`)};
    }
`

export const select = (theme: ThemeType, size: FormSelectSizeType, disabled?: boolean) => css`
    .select__control {
        ${control(theme)};

        .select__value-container {
            .select__placeholder,
            .select__input-container {
                font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                color: ${getThemeColor(theme, `FormSelect.input.color`)}!important;

                input {
                    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
                    font-style: normal !important;
                    font-weight: 400 !important;
                    font-size: 14px !important;
                    line-height: 22px !important;
                    color: ${getThemeColor(theme, `FormSelect.input.color`)}!important;
                }
            }
        }

        &.select__control--menu-is-open {
            ${!disabled &&
            css`
                border: 1px solid ${getThemeColor(theme, `FormSelect.menu.open.borderColor`)};
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

export const inlineStyle = (theme: ThemeType) => css`
    border-color: transparent;

    &:hover {
        border-color: ${getThemeColor(theme, `FormSelect.control.borderColor`)};
    }
`

export const small = css`
    height: 36px !important;
    min-height: 36px !important;
`

export const error = (theme: ThemeType) => css`
    border-color: ${getThemeColor(theme, `FormSelect.error.color`)} !important;
`

export const menu = (theme: ThemeType, zIndex?: number) => css`
    width: auto !important;
    margin-top: 4px;
    margin-bottom: 4px;
    border: 1px solid ${getThemeColor(theme, `FormSelect.menu.borderColor`)};
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    background: ${getThemeColor(theme, `FormSelect.menu.background`)};
    z-index: ${zIndex};
`

export const menuList = css`
    text-align: left;
    padding: 8px 0;
`

export const footerComponent = (theme: ThemeType) => css`
    height: 54px;
    border-top: 1px solid ${getThemeColor(theme, `FormSelect.menu.borderColor`)};
    background: ${getThemeColor(theme, `FormSelect.menu.background`)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`

export const footerLinks = css`
    display: flex;
    gap: 16px;
`

export const footerLink = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `FormSelect.menu.footer.link.color`)};
`

export const footerLinkPrimary = (theme: ThemeType) => css`
    text-decoration: underline;
    color: ${getThemeColor(theme, `FormSelect.menu.footer.link.primary.color`)};
    font-weight: bold;

    &:hover {
        text-decoration: none;
    }
`

export const option = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `FormSelect.option.color`)};
    background: ${getThemeColor(theme, `FormSelect.menu.background`)};
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
        color: ${getThemeColor(theme, `FormSelect.option.hover.color`)};
        background: transparent;
    }

    &:active {
        background: transparent;
    }
`

export const optionRight = css`
    justify-content: flex-end;
    text-align: right;
`

export const optionSelected = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `FormSelect.optionSelected.color`)};
    background: ${getThemeColor(theme, `FormSelect.menu.background`)};
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

export const valueContainerMulti = css`
    flex-wrap: nowrap;
`

export const valueContainerCheckbox = css`
    display: flex;
`

export const valueContainerMultiRight = css`
    justify-content: flex-end;
`

export const value = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `FormSelect.value.color`)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
`

export const multiValue = (theme: ThemeType) => css`
    font-size: 12px;
    line-height: 18px;
    flex: 0 0 auto;
    color: ${getThemeColor(theme, `FormSelect.multi.value.color`)};
    border: 1px solid ${getThemeColor(theme, `FormSelect.multi.value.borderColor`)};
    background: ${getThemeColor(theme, `FormSelect.multi.value.background`)};
    padding: 0;
    cursor: pointer;
`

export const multiValueLabel = (theme: ThemeType) => css`
    border: none !important;
    padding: 3px 4px;
`

export const multiValueRemove = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    padding: 0 !important;
    box-sizing: border-box;
    text-align: right;
    font-size: 12px;
    line-height: 18px;
    border: 1px solid transparent;
    background: ${getThemeColor(theme, `FormSelect.multi.value.background`)};
    transition: all 0.3s;
    color: ${getThemeColor(theme, `FormSelect.multi.value.color`)};

    &:hover {
        color: ${getThemeColor(theme, `FormSelect.multi.value.remove.hover.color`)};
        background: ${getThemeColor(theme, `FormSelect.multi.value.remove.hover.background`)};
    }
`

export const multiValueRight = css`
    order: 2;
`

export const dropdownIndicator = css`
    //padding-right: 16px;
    padding: 4px 16px 4px 4px;
`

export const indicator = (theme: ThemeType) => css`
    transition: all 0.3s;
    color: ${getThemeColor(theme, `FormSelect.indicator.color`)};
`

export const indicatorOpen = css`
    transform: rotate(180deg);
`

export const placeholder = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `FormSelect.placeholder.color`)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`

export const textRight = css`
    text-align: right;
`

export const disabled = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `FormSelect.disabled.color`)};
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
