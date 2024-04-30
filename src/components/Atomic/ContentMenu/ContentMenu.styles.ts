import { css } from '@emotion/react'
import { ThemeType, get } from '../_theme'

export const contentMenu = (theme: ThemeType) => css`
    padding: 16px 12px 12px 12px;
    border-radius: 16px;
    border: 1px solid ${get(theme, `ContentMenu.borderColor`)};
    background: ${get(theme, `ContentMenu.background`)};
    box-shadow: 0 1px 2px 0 rgba(228, 229, 231, 0.24);
`

export const title = (theme: ThemeType) => css`
    color: ${get(theme, `ContentMenu.title.color`)};
    margin-bottom: 12px;
    padding: 0 12px;
`

export const searchWrapper = css`
    position: relative;
`

export const searchIcon = css`
    position: absolute;
    top: 15px;
    left: 12px;
`

export const search = (theme: ThemeType) => css`
    background: ${get(theme, `ContentMenu.search.background`)};
    border: none;
    padding: 12px 12px 12px 40px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: ${get(theme, `ContentMenu.search.color`)};
    width: 100%;
    margin-bottom: 12px;
    border-radius: 8px;

    &:focus {
        outline: none;
        border: none;
    }
`

export const menuList = css`
    list-style: none;
    padding: 0;
    margin: 0;

    .item-enter {
    }

    .item-enter-done {
        max-height: 200px;
    }

    .item-enter-active {
        max-height: 200px;
    }

    .item-exit {
        max-height: 0;
    }

    .item-exit-active {
        max-height: 0;
    }
`

export const itemTitleIcon = css`
    flex: 0 0 16px;
`

export const itemTitleText = css`
    display: flex;
    align-items: center;
    margin-left: 12px;
    font-weight: bold;
`

export const titleNoMargin = css`
    margin-left: 0;
`

export const item = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    padding: 10px 12px;
    text-decoration: none;
    min-height: 40px;
    box-sizing: border-box;
    border-radius: 8px;
    color: ${get(theme, `ContentMenu.item.color`)};
    transition: all 0.25s;
    position: relative;
    overflow: hidden;

    &:hover {
        text-decoration: none !important;
        color: ${get(theme, `ContentMenu.item.hover.color`)};

        .icon {
            color: ${get(theme, `ContentMenu.item.hover.icon.color`)};
        }
    }
`

export const activeItem = (theme: ThemeType) => css`
    color: ${get(theme, `ContentMenu.item.active.color`)};
    background: ${get(theme, `ContentMenu.item.active.background`)};

    .icon {
        color: ${get(theme, `ContentMenu.item.active.icon.color`)}!important;
    }

    &:hover {
        text-decoration: none !important;
        color: ${get(theme, `ContentMenu.item.active.hover.color`)};
    }
`

export const arrow = css`
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s;
`

export const activeArrow = css`
    transform: translateY(-50%) rotate(180deg);
`

export const subItems = css`
    // max-height: 0;
    overflow: hidden;
    //transition: all 0.45s;
`

export const subItemsList = css`
    margin: 0;
    padding: 10px 0 0 20px;
    list-style: none;
`

export const subItemLink = (theme: ThemeType) => css`
    display: block;
    position: relative;
    padding: 8px 8px 8px 20px;
    white-space: nowrap;
    color: ${get(theme, `ContentMenu.subItem.color`)};

    &:hover {
        color: ${get(theme, `ContentMenu.subItem.hover.color`)};
    }
`

export const subItemLinkActive = (theme: ThemeType) => css`
    color: ${get(theme, `ContentMenu.subItem.active.color`)};
`

export const line = css`
    width: 14px;
    height: 55px;
    position: absolute;
    left: 0;
    bottom: 50%;
`

export const icon = css`
    margin-left: 8px;
`

export const iconSuccess = (theme: ThemeType) => css`
    color: ${get(theme, `ContentMenu.item.icon.success.color`)};
`

export const iconError = (theme: ThemeType) => css`
    color: ${get(theme, `ContentMenu.item.icon.error.color`)};
`
