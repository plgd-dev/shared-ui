import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const formGroupMargin = css`
    margin-bottom: 20px;
`

export const inline = (inlineJustifyContent: string) => css`
    display: flex;
    align-items: center;
    justify-content: ${inlineJustifyContent};
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

export const inlineItems = css`
    margin: -4px;
    align-items: flex-start;
`

export const inlineItem = css`
    margin: 4px;
`

export const inlineItemFullSize = css`
    width: 100%;
`
