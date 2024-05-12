import { css } from '@emotion/react'
import { fontPrimary, hexToRgbA } from '../../../_utils/commonStyles'
import { colors } from '../../../_utils/colors'
import { ThemeType, getThemeColor, getTheme } from '../../../_theme'

export const item = css`
    display: flex;
    padding: 16px 0;
`

export const borderTop = (theme: ThemeType) => css`
    border-top: 1px solid ${getThemeColor(theme, `NotificationCenter.InnerToast.borderColor`)};
`

export const iconWrapper = css`
    flex: 0 0 40px;
    position: relative;
`

export const unreadMark = (theme: ThemeType) => css`
    position: absolute;
    width: 11px;
    height: 11px;
    left: 0;
    top: 0;
    background: ${colors.red};
    border: 2px solid ${getThemeColor(theme, `NotificationCenter.InnerToast.unreadMark.borderColor`)};
    border-radius: 50%;
    box-sizing: border-box;
`

export const contentWrapper = css`
    flex: 1 1 auto;
    padding-left: 12px;
`

export const iconOverlay = css`
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 50%;
`

export const colorInfo = css`
    color: ${colors.primary};
`

export const colorInfoBg = (theme: ThemeType) => css`
    background-color: ${hexToRgbA(getThemeColor(theme, `NotificationCenter.info`), 0.16)};
`

export const colorSuccess = css`
    color: ${colors.green};
`

export const colorSuccessBg = (theme: ThemeType) => css`
    background-color: ${hexToRgbA(getThemeColor(theme, `NotificationCenter.green`), 0.16)};
`

export const colorWarning = css`
    color: ${colors.yellow};
`

export const colorWarningBg = (theme: ThemeType) => css`
    background-color: ${hexToRgbA(getThemeColor(theme, `NotificationCenter.yellow`), 0.16)};
`

export const colorError = css`
    color: ${colors.red};
`

export const colorErrorBg = (theme: ThemeType) => css`
    background-color: ${hexToRgbA(getThemeColor(theme, `NotificationCenter.red`), 0.16)};
`

export const headline = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${getThemeColor(theme, `NotificationCenter.InnerToast.headline.color`)};
    margin: 0;
`

export const description = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral500};
`
