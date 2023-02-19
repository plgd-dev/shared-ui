import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const splitButton = css`
    display: flex;
`

export const leftButton = css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`

export const rightButton = css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
    padding: 14px;
`

export const arrow = css`
    transition: all 0.3s;
`

export const arrowOpen = css`
    transform: rotate(180deg);
`

export const floatingMenu = css`
    z-index: 10;
    background: #fff;
    border: 1px solid #e6e9ed;
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    padding: 10px 20px;
`

export const item = css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${colors.neutral500};
    transition: all 0.3s;
    margin: 6px 0;
    padding: 4px 0;
    cursor: pointer;

    &:hover {
        color: ${colors.primary};
    }
`

export const itemIcon = css`
    margin-right: 10px;
`

export const itemLabel = css`
    font-size: 14px;
    line-height: 14px;
`