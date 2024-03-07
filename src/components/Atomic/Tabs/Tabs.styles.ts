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
    height: 100%;
`

export const tabList = (theme: ThemeType) => css`
    display: block;
    position: relative;
    border-bottom: 1px solid ${get(theme, `Tabs.list.borderColor`)};
`

export const tabListInnerPadding = css`
    margin-left: 40px;
    margin-right: 40px;
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
    display: inline-flex;
    align-items: center;

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

export const isDisabled = (theme: ThemeType) => css`
    color: ${get(theme, `Tabs.disabled.color`)};
    cursor: not-allowed !important;

    &:hover {
        color: ${get(theme, `Tabs.disabled.color`)};
    }
`

export const slider = (theme: ThemeType) => css`
    height: 3px;
    bottom: 0;
    position: absolute;
    background: ${get(theme, `Tabs.slider.background`)};
`

export const page = css`
    padding-top: 24px;
`

export const pageXpadding = css`
    padding-left: 40px;
    padding-right: 40px;
    overflow: auto;
`

export const icon = css`
    margin-left: 8px;
`

export const iconSuccess = (theme: ThemeType) => css`
    color: ${get(theme, `Tabs.icon.success.color`)};
`

export const iconError = (theme: ThemeType) => css`
    color: ${get(theme, `Tabs.icon.error.color`)};
`
