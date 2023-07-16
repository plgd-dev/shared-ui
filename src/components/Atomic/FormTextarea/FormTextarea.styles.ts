import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const textarea = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    border: 1px solid #e6e9ed;
    border-radius: 8px;
    display: block;
    width: 100%;
    padding: 8px 16px;
    transition: all 0.25s;
    color: #252626;
    box-sizing: border-box;
    min-height: 120px;

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

    &::-ms-reveal,
    &::-ms-clear {
        display: none;
    }
`

export const disabled = css`
    background: #f6f7f9;
    color: #757676;
`

export const readOnly = css`
    color: #757676;
`

export const error = css`
    border-color: ${colors.red};
`
