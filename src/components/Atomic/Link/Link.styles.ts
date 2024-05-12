import { css } from '@emotion/react'
import { getTheme, getThemeColor, ThemeType } from '../_theme'
import { fontPrimary } from '../_utils/commonStyles'

export const link = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    text-decoration-line: underline;
    color: ${getThemeColor(theme, `Link.normal.color`)};
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;

    &:hover {
        text-decoration: none;
    }
`

export const big = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `Link.big.color`)};
    border-bottom: 2px solid ${getThemeColor(theme, `Link.big.color`)};
    text-decoration: none !important;
    transition: all 0.25s;
    padding-bottom: 2px;
    font-weight: bold;

    &:hover {
        text-decoration: none;
        border-bottom-color: transparent;
    }
`
