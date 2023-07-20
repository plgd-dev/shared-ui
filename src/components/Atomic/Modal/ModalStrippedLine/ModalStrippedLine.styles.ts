import { css } from '@emotion/react'
import { colors } from '../../_utils/colors'

export const strippedLine = css`
    display: flex;
    padding: 16px 0;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.neutral200};
`

export const smallPadding = css`
    padding: 12px 0;
`

export const label = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral500};
`

export const component = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: right;
    color: ${colors.neutral800};
`
