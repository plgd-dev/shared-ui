import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { fontPrimary } from '../_utils/commonStyles'
import { ThemeType, get } from '../_theme'

export const container = css`
    overflow-y: hidden;
    box-shadow: none;
`

export const fullHeight = css`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
`

export const tabList = (theme: ThemeType) => css`
    display: block;
    position: relative;
    border-bottom: 1px solid ${get(theme, `Tabs.list.borderColor`)};
`

export const tabItem = (theme: ThemeType) => css`
    white-space: nowrap;
    box-sizing: border-box;
    text-align: center;
    text-rendering: optimizelegibility;
    user-select: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    text-decoration: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: 16px 0;
    text-size-adjust: none;
    text-overflow: ellipsis;
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.neutral500};
    overflow: hidden;
    background: transparent;
    margin: 0 24px 0 0;
    transition: all 0.25s;

    &:hover {
        color: ${get(theme, 'Tabs.item.hover.color')};
        background: transparent;
    }

    &:last-child {
        margin-right: 0;
    }
`

export const isActive = (theme: ThemeType) => css`
    color: ${get(theme, `Tabs.active.color`)};
`

export const slider = (theme: ThemeType) => css`
    height: 3px;
    bottom: 0;
    position: absolute;
    background: ${get(theme, `Tabs.slider.background`)};
`

export const page = css`
    padding: 24px 0 0 0;
`
