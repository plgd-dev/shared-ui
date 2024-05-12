import { css } from '@emotion/react'
import { ThemeType, getThemeColor } from '../_theme'

export const expandContent = (theme: ThemeType) => css`
    padding: 24px;
    border-radius: 8px;
    background: ${getThemeColor(theme, `LinkExpander.background`)};
`
