import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import styled from '@emotion/styled'
import { get, ThemeType } from '../_theme'

export const checkbox = css`
    display: flex;
    align-items: flex-start;
    position: relative;
    overflow: hidden;
`

export const check = styled.span`
    width: 16px;
    height: 16px;
    flex: 0 0 16px;
    border: 1px solid ${(props) => get(props.theme, `Checkbox.borderColor`)};
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.25s;
    position: relative;
    box-sizing: border-box;

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
        background: ${(props) => get(props.theme, `Checkbox.background`)};
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
        border-color: ${get(theme, `Checkbox.input.borderColor`)};

        &:before {
            opacity: 1;
        }
    }

    &:checked ~ ${check} {
        border-color: ${get(theme, `Checkbox.input.borderColor`)};

        &:after {
            opacity: 1;
        }
    }
`

export const label = css`
    font-size: 12px;
    color: #81868c;
    padding-left: 8px;
    cursor: pointer;
    line-height: 18px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
`

export const error = css`
    border-color: ${colors.red};
`
