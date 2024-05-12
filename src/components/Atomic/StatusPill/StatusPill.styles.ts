import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { ThemeType, getThemeColor, getTheme } from '../_theme'
import { fontPrimary } from '../_utils/commonStyles'

export const statusPill = css`
    display: flex;
    align-items: center;
`

export const statusLine = css`
    width: 4px;
    height: 24px;
    border-radius: 6px;
`

export const online = (theme: ThemeType) => css`
    background-color: ${getThemeColor(theme, 'StatusPill.statusLine.green')};
`

export const offline = (theme: ThemeType) => css`
    background-color: ${getThemeColor(theme, 'StatusPill.statusLine.red')};
`

export const occupied = (theme: ThemeType) => css`
    background-color: ${getThemeColor(theme, 'StatusPill.statusLine.occupied')};
`

export const label = (theme: ThemeType) => css`
    display: inline-block;
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: ${colors.neutral500};
`

export const content = css`
    padding-left: 8px;
`

export const pending = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: ${colors.primary};
    padding-top: 4px;
    cursor: pointer;
    white-space: nowrap;
`
