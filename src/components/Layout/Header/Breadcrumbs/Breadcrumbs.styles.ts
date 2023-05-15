import { css } from '@emotion/react'
import { colors } from '../../../Atomic/_utils/colors'

export const breadcrumbs = css`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const divider = css`
    display: inline-block;
    padding: 0 3px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${colors.neutral500};
    position: relative;
    top: 1px;
`

export const item = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.neutral500};
`

export const link = css`
    color: ${colors.primary};
    text-decoration: none;
`
