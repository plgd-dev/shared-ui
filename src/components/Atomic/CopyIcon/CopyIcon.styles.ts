import { css } from '@emotion/react'

import { get, ThemeType } from '../_theme'

export const copy = (theme: ThemeType) => css`
    display: inline-flex;
    color: ${get(theme, `CopyIcon.color`)};
    transition: all 0.3s;
    margin-left: 8px;
    cursor: pointer;

    &:hover {
        color: ${get(theme, `CopyIcon.hover.color`)};
    }
`
