import { css } from '@emotion/react'
import { getThemeColor, ThemeType } from '../_theme'

export const actionButton = css`
    width: 20px;
    height: 20px;
`

export const floatingMenu = (theme: ThemeType) => css`
    z-index: 10;
    background: ${getThemeColor(theme, `ActionButton.floatingMenu.background`)};
    border: 1px solid ${getThemeColor(theme, `ActionButton.floatingMenu.borderColor`)};
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    padding: 8px 16px;
`

export const item = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${getThemeColor(theme, `ActionButton.item.color`)};
    transition: all 0.3s;
    padding: 8px 0;
    cursor: pointer;
    border-bottom: 1px solid ${getThemeColor(theme, `ActionButton.item.borderColor`)};

    &:hover {
        color: ${getThemeColor(theme, `ActionButton.item.hover.color`)};
    }

    &:last-child {
        border-bottom: 0;
    }
`

export const itemIcon = css`
    margin-right: 10px;
`

export const itemLabel = css`
    font-size: 14px;
    line-height: 14px;
`

export const icon = (theme: ThemeType) => css`
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${getThemeColor(theme, `ActionButton.icon.color`)};
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        color: ${getThemeColor(theme, `ActionButton.icon.hover.color`)};
    }
`

export const iconActive = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `ActionButton.icon.active.color`)};
`
