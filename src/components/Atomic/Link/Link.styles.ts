import { css } from '@emotion/react'
import { get, ThemeType } from '../_theme'

export const link = (theme: ThemeType) => css`
    font-family: 'Poppins', sans-serif;
    text-decoration-line: underline;
    color: ${get(theme, `Link.normal.color`)};
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;

    &:hover {
        text-decoration: none;
    }
`

export const big = (theme: ThemeType) => css`
    color: ${get(theme, `Link.big.color`)};
    border-bottom: 2px solid ${get(theme, `Link.big.color`)};
    text-decoration: none !important;
    transition: all 0.25s;
    padding-bottom: 2px;
    font-weight: bold;

    &:hover {
        text-decoration: none;
        border-bottom-color: transparent;
    }
`
