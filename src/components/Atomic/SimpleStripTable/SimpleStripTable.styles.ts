import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { fontPrimary } from '../_utils/commonStyles'

export const table = css``

export const row = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    background: #ffffff;
    border-radius: 8px;
    transition: all 0.25s;
    height: 54px;

    &:hover {
        background: ${colors.tertiary};
    }
`

export const attribute = css`
    padding: 16px 24px;
    color: ${colors.neutral500};
    height: 54px;
    box-sizing: border-box;
`

export const value = css`
    padding: 16px 24px;
    color: ${colors.neutral800};
    flex: 1 1 auto;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    height: 54px;
    box-sizing: border-box;
`

export const border = css`
    position: relative;

    &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        height: 1px;
        background: ${colors.neutral200};
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
