import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { fontPrimary } from '../_utils/commonStyles'

export const container = css`
    overflow-y: hidden;
    box-shadow: none;
`

export const tabList = css`
    display: block;
    position: relative;
    border-bottom: 1px solid ${colors.neutral200};
`

export const tabItem = css`
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
        color: ${colors.primaryDarken};
        background: transparent;
    }

    &:last-child {
        margin-right: 0;
    }
`

export const isActive = css`
    color: ${colors.primaryDarken};
`

export const slider = css`
    height: 3px;
    bottom: 0;
    position: absolute;
    background: ${colors.primaryBonus};
`

export const page = css`
    padding: 24px 0 0 0;
`
