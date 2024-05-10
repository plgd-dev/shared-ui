import { css } from '@emotion/react'
import { ThemeType, get } from '../_theme'

export const treeExpander = (theme: ThemeType) => css`
    padding-right: 8px;
    cursor: pointer;

    &:hover {
        .expander-icon {
            color: ${get(theme, `TreeExpander.hover.expanderIcon.color`)};
        }
    }
`

export const expanderIcon = (theme: ThemeType) => css`
    color: ${get(theme, `TreeExpander.icon.color`)};
    transition: all 0.3s;
`

export const expanded = (theme: ThemeType) => css`
    color: ${get(theme, `TreeExpander.expanded.color`)};
    transform: rotate(180deg);
`
