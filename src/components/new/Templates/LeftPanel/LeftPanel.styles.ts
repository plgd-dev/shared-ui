import { css } from '@emotion/react'
import { MenuTagVariantType } from './LeftPanel.types'
import { tagVariants } from './constants'
import { colors } from '../../_utils/colors'

export const leftPanel = css`
    background: #f4f9fb;
    width: 280px;
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const logo = css`
    padding: 24px;
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
    box-sizing: border-box;
`

export const menu = css`
    flex: 1 1 auto;
    overflow: auto;
    padding: 0 24px 24px 24px;
    box-sizing: border-box;

    .menu-list-group {
        & + .menu-list-group {
            margin-top: 24px;
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

export const menuList = css`
    list-style: none;
    padding: 0;
    margin: 0;
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

export const item = css`
    display: flex;
    padding: 12px;
    text-decoration: none;
    min-height: 40px;
    box-sizing: border-box;
    border-radius: 8px;
    color: #81868c;
    transition: all 0.25s;

    &:hover {
        color: #0a2965;
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
    position: relative;
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

export const subItems = css`
    max-height: 0;
    overflow: hidden;
    transition: all 0.65s;
`

export const subItemsList = css`
    padding: 10px 0 0 20px;
    margin: 0;
    list-style: none;
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
    padding: 8px 8px 8px 20px;
    margin: 4px 0 4px 8px;
    transition: all 0.25s;
    border-radius: 8px;

    &:hover {
        color: #0a2965;
    }
`

export const subItemLinkActive = css`
    color: #0a2965;
    background: #fff;
`

export const line = css`
    width: 14px;
    height: 55px;
    position: absolute;
    left: -8px;
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
