import { css } from '@emotion/react'
import { get, ThemeType } from '../_theme'

export const scrollbar = (theme: ThemeType) => css`
    background: ${get(theme, `Scrollbar.color`)}!important;
`
