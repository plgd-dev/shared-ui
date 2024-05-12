import { css } from '@emotion/react'
import { colors } from '../../../Atomic/_utils/colors'
import { ThemeType, getThemeColor, getTheme } from '../../../Atomic/_theme'
import { fontPrimary } from '../../../Atomic/_utils/commonStyles'

export const widgetReference = css`
    display: flex;
    align-items: stretch;
`

export const userWidget = css`
    padding-left: 12px;
    display: flex;
`

export const clickable = css`
    cursor: pointer;
`

export const widgetArrow = css`
    padding-left: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const icon = css`
    transition: all 0.3s;
`

export const name = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: ${getThemeColor(theme, `UserWidget.name.color`)};
`

export const description = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.neutral500};
    opacity: 0.8;
`

export const image = (theme: ThemeType) => css`
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    margin-right: 12px;

    img {
        border-radius: 50%;
        width: 100%;
        height: auto;
    }

    .sb-avatar__text {
        background: ${getThemeColor(theme, `UserWidget.image.background`)} !important;
    }
`

export const logoutIcon = (theme: ThemeType) => css`
    display: flex;
    align-self: center;
    margin-left: 36px;

    color: ${getThemeColor(theme, `UserWidget.logout.color`)};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: ${getThemeColor(theme, `UserWidget.logout.hover.color`)};
    }
`

export const logoutIconBtn = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `UserWidget.logout.color`)};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: ${getThemeColor(theme, `UserWidget.logout.hover.color`)};
    }
`

export const floatingMenu = (theme: ThemeType) => css`
    z-index: 10;
    background: ${getThemeColor(theme, `UserWidget.floatingMenu.background`)};
    border: 1px solid ${getThemeColor(theme, `UserWidget.floatingMenu.border`)};
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    padding: 10px 20px;
`

export const item = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${colors.neutral500};
    transition: all 0.3s;
    margin: 6px 0;
    padding: 4px 0;
    cursor: pointer;

    &:hover {
        color: ${getThemeColor(theme, `UserWidget.floatingMenu.item.hover.color`)};
    }
`
