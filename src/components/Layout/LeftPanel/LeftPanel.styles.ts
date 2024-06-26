import { css } from '@emotion/react'

import { MenuTagVariantType } from './LeftPanel.types'
import { panelSizes, tagVariants } from './constants'
import { colors } from '../../Atomic/_utils/colors'
import { COLLAPSE_ANIMATION_TIME } from '../constants'
import { getTheme, getThemeColor, ThemeType } from '../../Atomic/_theme'
import { fontPrimary, fontSecondary } from '../../Atomic/_utils/commonStyles'

export const leftPanel = (theme: ThemeType) => css`
    background: ${getThemeColor(theme, `LeftPanel.background`)};
    display: flex;
    flex-direction: column;
    transition: all ${COLLAPSE_ANIMATION_TIME}ms;
    flex: 0 0 ${panelSizes.FULL}px;
`

export const collapsed = css`
    flex: 0 0 ${panelSizes.COLLAPSED}px;
`

export const collapseToggle = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `LeftPanel.collapseToggle.color`)};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: ${getThemeColor(theme, `LeftPanel.collapseToggle.hover.color`)};
    }
`

export const logo = (theme: ThemeType) => css`
    padding: 24px;
    display: flex;
    margin-bottom: 24px;
    box-sizing: border-box;
    justify-content: flex-start;
    overflow: hidden;
    position: relative;
    transition: all ${COLLAPSE_ANIMATION_TIME}ms;
    height: 80px;

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 17px;
        background: ${getThemeColor(theme, `LeftPanel.logo.background`)};
    }

    #main-app-logo {
        position: absolute;
        left: 24px;
        top: 24px;
        transition: all ${COLLAPSE_ANIMATION_TIME}ms;
        cursor: pointer;
    }
`

export const logoCollapsed = css`
    justify-content: flex-start;
    padding: 24px 17px;

    #main-app-logo {
        left: 17px;
    }
`

export const menu = css`
    flex: 1 1 auto;
    overflow: auto;
    padding: 0 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    transition: all ${COLLAPSE_ANIMATION_TIME}ms;

    .menu-list-group {
        & + .menu-list-group {
            margin-top: 12px;
        }
    }
`

export const menuCollapsed = css`
    padding: 0 22px;
`

export const menuList = css`
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    flex: 1 1 auto;
`

export const menuListItem = css`
    //display: flex;
    //justify-content: center;
`

export const group = css`
    .menu-list-item {
        & + .menu-list-item {
            margin-top: 6px;
        }
    }
`

export const groupTitle = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${getThemeColor(theme, `LeftPanel.groupTitle.color`)};
    margin-bottom: 12px;
`

export const groupTitleCollapsed = css`
    text-align: center;
`

export const item = (theme: ThemeType) => css`
    display: flex;
    padding: 12px;
    text-decoration: none;
    min-height: 40px;
    box-sizing: border-box;
    border-radius: 8px;
    color: ${getThemeColor(theme, `LeftPanel.item.color`)};
    transition: all 0.25s;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        color: ${getThemeColor(theme, `LeftPanel.item.hover.color`)};
    }
`

export const activeItem = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, 'LeftPanel.item.active.color')} !important;
    background: ${getThemeColor(theme, 'LeftPanel.item.active.background')};
`

export const disabled = (theme: ThemeType) => css`
    cursor: not-allowed;
    color: ${getThemeColor(theme, 'LeftPanel.item.disabled.color')} !important;

    &:hover {
        text-decoration: none !important;
        color: ${getThemeColor(theme, 'LeftPanel.item.disabled.color')} !important;
    }
`

export const itemTitle = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 12px;
    right: 12px;
    bottom: 12px;
    left: 12px;
    height: 14px;
    text-overflow: ellipsis;
`

export const itemTitleIcon = css`
    transition: all 0.3s;
    flex: 0 0 16px;
`

export const itemTitleText = css`
    margin-left: 14px;
`

export const itemTitleActive = css`
    font-weight: bold;
`

export const arrow = css`
    position: absolute;
    right: 0;
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

export const arrowCollapsed = css`
    right: unset;
    left: 20px;
`

export const subItems = css`
    //max-height: 0;
    overflow: hidden;
    //transition: all 0.45s;
`

export const subItemsList = css`
    padding: 10px 0 0 20px;
    margin: 0;
    list-style: none;
`

export const subItemsCollapsedList = css`
    padding: 0;
    margin: 0;
    list-style: none;
    overflow: hidden;
`

export const subItemsFloating = css`
    z-index: 10;
`

export const subItemsFloatingPadding = (theme: ThemeType) => css`
    border: 1px solid ${getThemeColor(theme, 'LeftPanel.subItem.border')};
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    background: ${getThemeColor(theme, 'LeftPanel.subItem.background')};
    overflow: hidden;
    padding: 16px 20px;
    box-sizing: border-box;
`

export const subItemLink = (theme: ThemeType) => css`
    display: block;
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: ${getThemeColor(theme, 'LeftPanel.subItem.color')};
    text-decoration: none;
    position: relative;
    margin: 4px 0 4px 0;
    transition: all 0.25s;
    padding: 8px 8px 8px 20px;
    white-space: nowrap;

    &:hover {
        color: ${getThemeColor(theme, 'LeftPanel.subItem.hover.color')} !important;
    }
`

export const subItemLinkLast = css`
    margin-bottom: 0;
`

export const subItemLinkActive = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, 'LeftPanel.subItem.active.color')} !important;
`

export const line = css`
    width: 14px;
    height: 55px;
    position: absolute;
    left: 0;
    bottom: 50%;
`

const getColorByVariant = (variant: MenuTagVariantType | string) => {
    switch (variant) {
        case tagVariants.SUCCESS:
            return css`
                background: ${colors.green};
            `
        case tagVariants.INFO:
            return css`
                background: ${colors.primary};
            `
    }
}

export const tag = (variant: MenuTagVariantType | string, theme: ThemeType) => css`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    border-radius: 100px;
    ${getColorByVariant(variant)};
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 18px;
    color: ${getThemeColor(theme, 'LeftPanel.item.tag.color')};
    padding: 0 10px;
`

export const newFeature = (theme: ThemeType) => css`
    background: ${getThemeColor(theme, `LeftPanel.newFeature.background`)};
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 16px;
    padding: 16px;
    cursor: pointer;
    margin-top: 8px;
    position: absolute;
    bottom: 24px;
`

export const header = css`
    display: flex;
    justify-content: space-between;
`

export const headerLeft = css``

export const headline = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontSecondary`, fontSecondary)};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.5px;
    color: ${getThemeColor(theme, `LeftPanel.headline.color`)};
    margin-bottom: 4px;
    user-select: none;
`

export const description = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.neutral500};
    margin-bottom: 16px;
    user-select: none;
`

export const headerRight = css``

export const iconClose = (theme: ThemeType) => css`
    cursor: pointer;
    transition: all 0.25s;
    color: ${colors.neutral500};

    &:hover {
        color: ${getThemeColor(theme, `LeftPanel.iconClose.color`)};
    }
`

export const versionItem = (theme: ThemeType) => css`
    border-top: 2px solid ${getThemeColor(theme, `LeftPanel.versionItem.borderColor`)};
    margin-top: 12px;
    padding: 0 0 0 8px;
    display: flex;
    align-items: center;
    position: relative;
    height: 64px;
    overflow: hidden;
`

export const versionItemInner = css`
    position: absolute;
    left: 8px;
    //top: 19px;
    overflow: hidden;
`

export const versionCollapsed = css`
    padding-left: 0;
    justify-content: center;
`
