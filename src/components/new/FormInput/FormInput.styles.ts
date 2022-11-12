import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const input = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    border: 1px solid #e6e9ed;
    border-radius: 8px;
    display: block;
    width: 100%;
    padding: 0 16px;
    transition: all 0.25s;
    color: #252626;
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
        border-color: ${colors.primary};
        outline: none;
    }
`

export const big = css`
    height: 48px;
`

export const normal = css`
    height: 40px;
`

export const inputWithIconWrapper = css`
    position: relative;
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

export const inputTelData = css`
    position: absolute;
    left: 12px;
    top: 12px;
    height: 24px;
    border-right: 1px solid #d7d8da;
    display: flex;
    align-items: center;
`

export const telPrefix = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #252626;
    padding: 0 10px 0 8px;
    user-select: none;
`

export const disabled = css`
    background: #f6f7f9;
    color: #757676;
`

export const error = css`
    border-color: ${colors.error};
`
