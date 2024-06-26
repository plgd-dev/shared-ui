import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { getThemeColor, ThemeType } from '../_theme'

export const checkbox = css`
    display: flex;
    align-items: flex-start;
    position: relative;
    overflow: hidden;
    padding-bottom: 2px;
`

export const noTopOffset = css`
    top: 0;
`

export const check = styled.span`
    width: 16px;
    height: 16px;
    flex: 0 0 16px;
    border: 1px solid ${(props) => getThemeColor(props.theme, `Checkbox.borderColor`)};
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.25s;
    position: relative;
    box-sizing: border-box;
    top: 2px; // 22px LH

    &:before,
    &:after {
        content: '';
        display: block;
        transition: opacity 0.25s;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        border-radius: 2px;
        background: ${(props) => getThemeColor(props.theme, `Checkbox.background`)};
        opacity: 0;
    }

    &:before {
        height: 2px;
    }

    &:after {
        height: 10px;
    }
`

export const input = (theme: ThemeType) => css`
    width: 1px;
    height: 1px;
    position: absolute;
    left: -10px;

    &:indeterminate ~ ${check} {
        border-color: ${getThemeColor(theme, `Checkbox.input.borderColor`)};

        &:before {
            opacity: 1;
        }
    }

    &:checked ~ ${check} {
        border-color: ${getThemeColor(theme, `Checkbox.input.borderColor`)};

        &:after {
            opacity: 1;
        }
    }
`

export const label = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `Checkbox.label.color`)};
    padding-left: 8px;
    cursor: pointer;
`

export const error = (theme: ThemeType) => css`
    border-color: ${getThemeColor(theme, `Checkbox.error.red`)};
`

export const disabled = (theme: ThemeType) => css`
    border-color: ${getThemeColor(theme, `Checkbox.disabled.background`)};
    background: ${getThemeColor(theme, `Checkbox.disabled.background`)} !important;
`
