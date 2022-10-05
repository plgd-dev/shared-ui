import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const input = css`
    font-family: 'Poppins', sans-serif;
    border: 1px solid #e6e9ed;
    border-radius: 8px;
    display: block;
    width: 100%;
    height: 48px;
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

export const inputWithIconWrapper = css`
    position: relative;
`

export const inputWithIcon = css`
    padding-right: 48px;
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

export const inputIconActive = css`
    color: #252626;
`

export const disabled = css`
    background: #f6f7f9;
    color: #757676;
`

export const error = css`
    border-color: ${colors.error};
`
