import { css } from '@emotion/react'
import { MenuTagVariantType } from './LeftPanel.types'
import { tagVariants } from './constants'
import { colors } from '../../_utils/colors'
import { COLLAPSE_ANIMATION_TIME } from '../constants'

export const leftPanel = css`
    background: #f4f9fb;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: all ${COLLAPSE_ANIMATION_TIME};
`

export const logo = css`
    padding: 24px;
    display: flex;
    margin-bottom: 24px;
    box-sizing: border-box;
    justify-content: center;
    overflow: hidden;
    position: relative;
    transition: all ${COLLAPSE_ANIMATION_TIME};
    height: 80px;

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 17px;
        background: #f4f9fb;
    }
`

export const logoSvg = css`
    position: absolute;
    left: 24px;
    top: 24px;
    transition: all ${COLLAPSE_ANIMATION_TIME};
`

export const logoCollapsed = css`
    justify-content: flex-start;
    padding: 24px 17px;
`

export const logoSvgCollapsed = css`
    left: 17px;
`

export const menu = css`
    flex: 1 1 auto;
    overflow: auto;
    padding: 0 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    transition: all ${COLLAPSE_ANIMATION_TIME};

    .menu-list-group {
        & + .menu-list-group {
            margin-top: 12px;
        }
    }

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

export const groupTitle = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: rgba(129, 134, 140, 0.8);
    margin-bottom: 12px;
`

export const groupTitleCollapsed = css`
    text-align: center;
`

export const item = css`
    display: flex;
    padding: 12px;
    text-decoration: none;
    min-height: 40px;
    box-sizing: border-box;
    border-radius: 8px;
    color: #81868c;
    transition: all 0.25s;
    position: relative;
    overflow: hidden;

    &:hover {
        color: ${colors.neutral800};
    }
`

export const activeItem = css`
    color: #0a2965;
    background: #fff;
`

export const itemTitle = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 12px;
    left: 12px;
`

export const itemTitleText = css`
    margin-left: 12px;
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
    position: inherit;
    transform: none;
    top: unset;
    margin-left: 5px;
`

export const subItems = css`
    max-height: 0;
    overflow: hidden;
    transition: all 0.45s;
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

export const subItemsFloatingPadding = css`
    border: 1px solid #e6e9ed;
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    background: #fff;
    overflow: hidden;
    padding: 16px 20px;
    box-sizing: border-box;
`

export const subItemLink = css`
    display: block;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #81868c;
    text-decoration: none;
    position: relative;
    margin: 4px 0 4px 0;
    transition: all 0.25s;
    padding: 8px 8px 8px 20px;
    white-space: nowrap;

    &:hover {
        color: ${colors.neutral800};
    }
`

export const subItemLinkLast = css`
    margin-bottom: 0;
`

export const subItemLinkActive = css`
    color: #0a2965;
`

export const line = css`
    width: 14px;
    height: 55px;
    position: absolute;
    left: 0;
    bottom: 50%;
`

const getColorByVariant = (variant: MenuTagVariantType) => {
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

export const tag = (variant: MenuTagVariantType) => css`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    border-radius: 100px;
    ${getColorByVariant(variant)};
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 18px;
    color: #ffffff;
    padding: 0 10px;
`

export const newFeature = css`
    background: #ffffff;
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

export const headline = css`
    font-family: 'Circular Pro', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.5px;
    color: #0a2965;
    margin-bottom: 4px;
    user-select: none;
`

export const description = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.neutral500};
    margin-bottom: 16px;
    user-select: none;
`

export const headerRight = css``

export const iconClose = css`
    cursor: pointer;
    transition: all 0.25s;
    color: ${colors.neutral500};

    &:hover {
        color: ${colors.primary};
    }
`

export const versionItem = css`
    border-top: 2px solid ${colors.neutral200};
    margin-top: 12px;
    padding: 19px 0 19px 8px;
    display: flex;
    align-items: center;
    position: relative;
    height: 64px;
`

export const versionItemInner = css`
    position: absolute;
    left: 8px;
    top: 19px;
    overflow: hidden;
`

export const versionCollapsed = css`
    padding-left: 0;
    justify-content: center;
`
