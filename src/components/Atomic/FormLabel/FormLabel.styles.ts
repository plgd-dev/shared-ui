import { css } from '@emotion/react'

import { ThemeType, get } from '../_theme'

export const label = (theme: ThemeType) => css`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    display: inline-block;
    margin-bottom: 10px;
    color: ${get(theme, `FormLabel.color`)};
    cursor: pointer;
`

export const inline = css`
    margin-bottom: 0;
    white-space: nowrap;
    margin-right: 10px;
`

export const w100 = css`
    width: 100%;
`

export const noMargin = css`
    margin-bottom: 0 !important;
`

export const required = (theme: ThemeType) => css`
    color: ${get(theme, `FormLabel.required.color`)};
`

export const flex = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
