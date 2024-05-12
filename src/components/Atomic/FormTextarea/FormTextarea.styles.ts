import { css } from '@emotion/react'

import { ThemeType, getThemeColor } from '../_theme'

export const textarea = (theme: ThemeType) => css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    border: 1px solid ${getThemeColor(theme, `FormTextarea.borderColor`)};
    border-radius: 8px;
    display: block;
    width: 100%;
    padding: 8px 16px;
    transition: all 0.25s;
    color: ${getThemeColor(theme, `FormTextarea.color`)};
    box-sizing: border-box;
    min-height: 120px;

    &::placeholder {
        color: ${getThemeColor(theme, `FormTextarea.placeholder.color`)};
        opacity: 1;
    }

    &:-ms-input-placeholder {
        color: ${getThemeColor(theme, `FormTextarea.placeholder.color`)};
    }

    &::-ms-input-placeholder {
        color: ${getThemeColor(theme, `FormTextarea.placeholder.color`)};
    }

    &:focus {
        border-color: ${getThemeColor(theme, `FormTextarea.focus.borderColor`)};
        outline: none;
    }

    &::-ms-reveal,
    &::-ms-clear {
        display: none;
    }
`

export const disabled = (theme: ThemeType) => css`
    background: ${getThemeColor(theme, `FormTextarea.disabled.background`)};
    color: ${getThemeColor(theme, `FormTextarea.disabled.color`)};
`

export const readOnly = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `FormTextarea.readOnly.color`)};
`

export const error = (theme: ThemeType) => css`
    border-color: ${getThemeColor(theme, `FormTextarea.error.color`)};
`
