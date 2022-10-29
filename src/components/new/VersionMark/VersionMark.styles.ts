import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const versionMark = css`
    display: flex;
    align-items: center;
`

export const versionText = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: ${colors.neutral500};
    padding-left: 6px;
`

export const updateText = css`
    color: ${colors.primary};
    text-decoration: underline;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    padding-left: 6px;
    cursor: pointer;

    &:hover {
        text-decoration: none;
    }
`
