import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { ThemeType, get } from '../_theme'

export const input = (theme: ThemeType) => css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    border: 1px solid ${get(theme, `FormInput.borderColor`)};
    background: ${get(theme, `FormInput.background`)};
    border-radius: 8px;
    display: block;
    width: 100%;
    padding: 0 16px;
    transition: all 0.25s;
    color: ${get(theme, `FormInput.color`)};
    box-sizing: border-box;

    &::placeholder {
        color: #81868c;
        opacity: 1;
    }

    &:-ms-input-placeholder {
        color: #81868c;
    }

    &::-ms-input-placeholder {
        color: #81868c;
    }

    &:focus {
        border-color: ${get(theme, `FormInput.focus.borderColor`)};
        outline: none;
    }

    &::-ms-reveal,
    &::-ms-clear {
        display: none;
    }
`

export const big = css`
    height: 48px;
`

export const normal = css`
    height: 44px;
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

export const inputIcon = css`
    position: absolute;
    right: 12px;
    top: 12px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    color: #81868c;
    cursor: pointer;
    transition: all 0.25ms;

    &:hover {
        color: #007bbf;
    }

    svg {
        width: 24px;
        height: 24px;
    }
`

export const passwordIcon = css`
    top: 10px;
    right: 12px;
    padding: 2px 0 2px 4px;
    background: #fff;
    width: 28px;
    height: 28px;
    box-sizing: border-box;
`

export const inputTelData = (theme: ThemeType) => css`
    position: absolute;
    left: 12px;
    top: 12px;
    height: 24px;
    border-right: 1px solid ${get(theme, `FormInput.borderColor`)};
    display: flex;
    align-items: center;
`

export const telPrefix = (theme: ThemeType) => css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${get(theme, `FormInput.color`)};
    padding: 0 10px 0 8px;
    user-select: none;
`

export const disabled = css`
    background: #f6f7f9;
    color: #757676;
`

export const readOnly = css`
    color: #757676;
`

export const error = (theme: ThemeType) => css`
    border-color: ${get(theme, `FormInput.error.red`)};
`
