import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const formGroupMargin = css`
    margin-bottom: 20px;
`

export const inline = css`
    display: flex;
    align-items: center;
`

export const errorMessage = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 160%;
    text-align: right;
    color: ${colors.red};
    padding-top: 4px;
`
