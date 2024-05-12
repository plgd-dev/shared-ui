import { css } from '@emotion/react'
import { ThemeType, getThemeColor } from '../_theme'

export const treeExpander = (theme: ThemeType) => css`
    padding-right: 8px;
    cursor: pointer;

    &:hover {
        .expander-icon {
            color: ${getThemeColor(theme, `TreeExpander.hover.expanderIcon.color`)};
        }
    }
`

export const expanderIcon = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `TreeExpander.icon.color`)};
    transition: all 0.3s;
`

export const expanded = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `TreeExpander.expanded.color`)};
    transform: rotate(180deg);
`
