import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const tag = css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    background: ${colors.neutral100};
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.neutral500};
    padding: 3px 8px;
`

export const icon = css`
    margin-right: 4px;
`
