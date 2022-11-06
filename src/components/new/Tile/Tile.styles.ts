import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const tile = css`
    border: 1px solid #e6e9ed;
    border-radius: 8px;
    padding: 24px;
    display: flex;
`

export const left = css`
    flex: 1 1 auto;
`

export const headline = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin: 0 0 4px 0;
    color: ${colors.neutral500};
`

export const content = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral800};
`

export const tags = css`
    margin: -4px;

    .tag {
        margin: 4px;
    }
`
