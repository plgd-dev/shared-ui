import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { fontPrimary } from '../_utils/commonStyles'
import { ThemeType, get } from '../_theme'

export const table = css``

export const row = (theme: ThemeType) => css`
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    background: ${get(theme, `SimpleStripTable.row.background`)};
    border-radius: 8px;
    transition: all 0.25s;
    height: 54px;

    &:hover {
        background: ${get(theme, `SimpleStripTable.row.hover.background`)};
    }
`

export const autoHeight = css`
    height: 100%;
`

export const attribute = css`
    padding: 16px 24px;
    color: ${colors.neutral500};
    height: 54px;
    box-sizing: border-box;
`

export const value = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    padding: 0 24px;
    color: ${get(theme, `SimpleStripTable.value.color`)};
    text-align: right;
    justify-content: flex-end;
    height: 54px;
    box-sizing: border-box;
`

export const border = (theme: ThemeType) => css`
    position: relative;

    &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        height: 1px;
        background: ${get(theme, `SimpleStripTable.border.background`)};
    }
`
export const borderLeft = css`
    position: relative;

    &:after {
        left: 7px;
        right: 0;
        width: calc(100% - 7px);
    }
`
export const borderRight = css`
    position: relative;

    &:after {
        left: 0;
        right: 7px;
        width: calc(100% - 7px);
    }
`
