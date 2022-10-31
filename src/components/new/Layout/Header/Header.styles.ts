import { css } from '@emotion/react'
import { colors } from '../../_utils/colors'

export const header = css`
    background-color: #fff;
    height: 85px;
    padding: 20px 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e9ed;
`

export const left = css`
    display: flex;
    align-items: center;
`

export const iconCollapse = css`
    color: ${colors.neutral500};
`

export const right = css`
    display: flex;
`

export const actions = css`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
`

export const actionItem = css`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.neutral500};
`
