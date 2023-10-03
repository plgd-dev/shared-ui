import { css } from '@emotion/react'
import { colors } from '../../../Atomic/_utils/colors'
import { ThemeType, get } from '../../../Atomic/_theme'

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

export const iconActive = css`
    transform: rotate(180deg);
`

export const name = (theme: ThemeType) => css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: ${get(theme, `UserWidget.name.color`)};
`

export const description = css`
    font-family: 'Poppins', sans-serif;
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
        background: ${get(theme, `UserWidget.image.background`)} !important;
    }
`

export const logoutIcon = (theme: ThemeType) => css`
    display: flex;
    align-self: center;
    margin-left: 36px;

    color: ${get(theme, `UserWidget.logout.color`)};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: ${get(theme, `UserWidget.logout.hover.color`)};
    }
`

export const logoutIconBtn = (theme: ThemeType) => css`
    color: ${get(theme, `UserWidget.logout.color`)};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: ${get(theme, `UserWidget.logout.hover.color`)};
    }
`

export const floatingMenu = (theme: ThemeType) => css`
    z-index: 10;
    background: ${get(theme, `UserWidget.floatingMenu.background`)};
    border: 1px solid ${get(theme, `UserWidget.floatingMenu.border`)};
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
        color: ${get(theme, `UserWidget.floatingMenu.item.hover.color`)};
    }
`
