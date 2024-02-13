import { css } from '@emotion/react'
import { ThemeType, get } from '../_theme'

export const expandContent = (theme: ThemeType) => css`
    padding: 24px;
    border-radius: 8px;
    background: ${get(theme, `LinkExpander.background`)};
`
