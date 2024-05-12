import { css } from '@emotion/react'
import { ThemeType, getThemeColor } from '../_theme'

export const formGroupMargin = css`
    margin-bottom: 20px;
`

export const inline = (inlineJustifyContent: string) => css`
    display: flex;
    align-items: center;
    justify-content: ${inlineJustifyContent};
`

export const errorMessage = (theme: ThemeType) => css`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 160%;
    text-align: right;
    color: ${getThemeColor(theme, `FormGroup.error.color`)};
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
