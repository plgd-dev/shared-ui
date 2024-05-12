import { css } from '@emotion/react'
import { ThemeType, getThemeColor, getTheme } from '../_theme'
import { fontPrimary } from '../_utils/commonStyles'

export const input = (theme: ThemeType, error?: boolean) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    border: 1px solid ${getThemeColor(theme, `FormInput.borderColor`)};
    background: ${getThemeColor(theme, `FormInput.background`)};
    border-radius: 8px;
    display: block;
    width: 100%;
    padding: 0 16px;
    transition: all 0.25s;
    color: ${getThemeColor(theme, `FormInput.color`)};
    box-sizing: border-box;

    &::placeholder {
        color: ${getThemeColor(theme, `FormInput.placeholder.color`)};
        opacity: 1;
    }

    &:-ms-input-placeholder {
        color: ${getThemeColor(theme, `FormInput.placeholder.color`)};
    }

    &::-ms-input-placeholder {
        color: ${getThemeColor(theme, `FormInput.placeholder.color`)};
    }

    &:focus {
        border-color: ${error ? undefined : getThemeColor(theme, `FormInput.focus.borderColor`)}!important;
        outline: none;
    }

    &::-ms-reveal,
    &::-ms-clear {
        display: none;
    }

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    &[type='number'] {
        -moz-appearance: textfield;
    }
`

export const inlineStyle = (theme: ThemeType) => css`
    border-color: transparent;

    &:hover {
        border-color: ${getThemeColor(theme, `FormInput.borderColor`)};
    }
`

export const big = css`
    height: 48px;
`

export const normal = css`
    height: 44px;
`

export const small = css`
    height: 36px;
`

export const inputWithIconWrapper = css`
    position: relative;
    width: 100%;
`

export const inputWithIcon = css`
    padding-right: 48px;
`

export const inputTel = css`
    padding-left: 100px;
`

export const rightContent = css`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`

export const inputIcon = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `FormInput.icon.color`)};
    cursor: pointer;
    transition: all 0.25ms;

    &:hover {
        color: ${getThemeColor(theme, `FormInput.icon.hover.color`)};
    }

    svg {
        width: 24px;
        height: 24px;
    }
`

export const passwordIcon = (theme: ThemeType) => css`
    top: 10px;
    right: 12px;
    padding: 2px 0 2px 4px;
    background: ${getThemeColor(theme, `FormInput.passwordIcon.background`)};
    width: 28px;
    height: 28px;
    box-sizing: border-box;
`

export const inputTelData = (theme: ThemeType) => css`
    position: absolute;
    left: 12px;
    top: 12px;
    height: 24px;
    border-right: 1px solid ${getThemeColor(theme, `FormInput.borderColor`)};
    display: flex;
    align-items: center;
`

export const telPrefix = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${getThemeColor(theme, `FormInput.color`)};
    padding: 0 10px 0 8px;
    user-select: none;
`

export const disabled = (theme: ThemeType) => css`
    background: ${getThemeColor(theme, `FormInput.disabled.background`)};
    color: ${getThemeColor(theme, `FormInput.disabled.color`)};
    border-color: ${getThemeColor(theme, `FormInput.disabled.borderColor`)};
    cursor: not-allowed;
`

export const readOnly = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `FormInput.readonly.color`)};
`

export const error = (theme: ThemeType) => css`
    border-color: ${getThemeColor(theme, `FormInput.error.red`)}!important;
`

export const right = css`
    text-align: right;
    cursor: text;
`
