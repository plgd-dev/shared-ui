import { css } from '@emotion/react'
import { getThemeColor, ThemeType } from '../_theme'

export const scrollbar = (theme: ThemeType) => css`
    background: ${getThemeColor(theme, `Scrollbar.color`)}!important;
`
