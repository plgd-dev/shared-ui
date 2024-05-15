import { css } from '@emotion/react'

export const wrapper = css`
    position: relative;
`

export const line = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
`

export const lineImg = css`
    position: absolute;
    bottom: -15px;
    left: -20px;
    background: #f2f3f5;
    height: calc(100% + 30px);
    width: 2px;

    &:after {
        content: '';
        position: absolute;
        width: 14px;
        height: 10px;
        bottom: 50%;
        left: 0;
        border-left: 2px solid #f2f3f5;
        border-bottom: 2px solid #f2f3f5;
        border-bottom-left-radius: 20px;
    }
`

export const isLast = css`
    height: calc(50% + 20px) !important;
    bottom: calc(50% + 8px) !important;

    &:after {
        bottom: -8px !important;
    }
`

export const noBefore = css`
    &:after {
        display: none;
    }
`

export const lastGroup = css`
    height: 0 !important;
`
