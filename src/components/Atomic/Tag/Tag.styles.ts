import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const tag = css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    background: #23233c;
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.neutral500};
    padding: 3px 8px;
`

export const clickable = css`
    cursor: pointer;
`

export const icon = css`
    margin-right: 4px;
`

export const blue = css`
    color: ${colors.primary};
    background: rgba(135, 206, 242, 0.2);
`

export const white = css`
    color: ${colors.neutral500};
    background: #fff;
`
