import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { fontPrimary, fontSecondary } from '../_utils/commonStyles'
import { ThemeType, getThemeColor, getTheme } from '../_theme'

export const floatingPanel = (theme: ThemeType) => css`
    z-index: 10;
    background: ${getThemeColor(theme, `NotificationCenter.floatingPanel.background`)};
    border: 1px solid ${getThemeColor(theme, `NotificationCenter.floatingPanel.borderColor`)};
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    min-width: 400px;
    max-width: 600px;
`

export const header = (theme: ThemeType) => css`
    padding: 16px;
    display: flex;
    height: 56px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${getThemeColor(theme, `NotificationCenter.Headline.borderColor`)};
`

export const headline = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontSecondary`, fontSecondary)};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.5px;
    color: ${getThemeColor(theme, `NotificationCenter.Headline.color`)};
`

export const clearAll = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    color: ${getThemeColor(theme, `NotificationCenter.ClearAll.color`)};
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-decoration: underline;

    &:hover {
        text-decoration: none !important;
        color: ${getThemeColor(theme, `NotificationCenter.ClearAll.color`)};
    }
`

export const content = css`
    //overflow: auto;
    //max-height: 400px;
    padding: 0 16px;
`

export const noNotifications = (theme: ThemeType) => css`
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral500};
`

export const verticalScrollbar = (theme: ThemeType) => css`
    background: ${getThemeColor(theme, `Scrollbar.color`)}!important;
`
