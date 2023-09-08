import { css } from '@emotion/react'
import { colors } from '../../../Atomic/_utils/colors'

export const pagination = css`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
`

export const item = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: ${colors.neutral500};
    text-decoration: none;
    height: 32px;
    min-width: 32px;
    margin: 0 2px;

    &:hover {
        text-decoration: none !important;
        color: ${colors.primary};
    }
`

export const active = css`
    color: ${colors.neutral900};
    font-weight: 600;
    background: #f6f7f9;
    border-radius: 4px;
    cursor: default;

    &:hover {
        color: ${colors.neutral900};
        text-decoration: none;
    }
`

export const disabled = css`
    color: ${colors.neutral300};
    cursor: not-allowed;
`
