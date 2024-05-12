import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { ThemeType, getThemeColor, getTheme } from '../_theme'
import { fontPrimary } from '../_utils/commonStyles'

export const tag = (theme: ThemeType) => css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    background: ${getThemeColor(theme, `Tag.background`)};
    border-radius: 4px;
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.neutral500};
    padding: 3px 8px;
    border: 1px solid ${getThemeColor(theme, `Tag.blue.borderColor`)};
    white-space: nowrap;
`

export const clickable = css`
    cursor: pointer;
`

export const icon = css`
    margin-right: 4px;
`

export const blue = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `Tag.blue.color`)};
    background: ${getThemeColor(theme, `Tag.blue.background`)};
    border: 1px solid ${getThemeColor(theme, `Tag.blue.borderColor`)};
`

export const white = (theme: ThemeType) => css`
    color: ${colors.neutral500};
    background: ${getThemeColor(theme, `Tag.white.background`)};
    border: 1px solid ${getThemeColor(theme, `Tag.blue.borderColor`)};
`
