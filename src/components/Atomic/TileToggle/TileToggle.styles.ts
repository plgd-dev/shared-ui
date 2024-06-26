import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { fontPrimary } from '../_utils/commonStyles'
import { ThemeType, getThemeColor, getTheme } from '../_theme'

export const tileToggle = (theme: ThemeType) => css`
    background: ${getThemeColor(theme, `TileToggle.background`)};
    border-radius: 8px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const darkBg = (theme: ThemeType) => css`
    background: ${getThemeColor(theme, `TileToggle.darkBg.background`)};
`

export const name = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: ${getThemeColor(theme, 'TileToggle.name.color')};
    display: flex;
    align-items: center;
`

export const loading = css`
    margin-left: 8px;
`

export const headline = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin: 0 0 4px 0;
    color: ${colors.neutral500};
`

export const content = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral800};
`

export const tags = css`
    margin: -4px;

    .tag {
        margin: 4px;
    }
`
