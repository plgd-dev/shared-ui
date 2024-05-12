import { css } from '@emotion/react'

import { getThemeColor, ThemeType } from '../_theme'

export const copy = (theme: ThemeType) => css`
    display: inline-flex;
    color: ${getThemeColor(theme, `CopyIcon.color`)};
    transition: all 0.3s;
    margin-left: 8px;
    cursor: pointer;

    &:hover {
        color: ${getThemeColor(theme, `CopyIcon.hover.color`)};
    }
`
