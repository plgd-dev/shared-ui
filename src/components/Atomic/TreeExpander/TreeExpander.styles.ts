import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const treeExpander = css`
    padding-right: 8px;
    cursor: pointer;

    &:hover {
        .expander-icon {
            color: ${colors.primary};
        }
    }
`

export const expanderIcon = css`
    color: #81868c;
    transition: all 0.3s;
`

export const expanded = css`
    color: ${colors.primary};
    transform: rotate(180deg);
`
