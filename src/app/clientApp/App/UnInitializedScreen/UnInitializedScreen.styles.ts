import { css } from '@emotion/react'

export const unInitializedScreen = css`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const step = css``

export const headline = css`
    text-align: center;
    margin-bottom: 32px;
`

export const tileRow = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
`

export const tile = css`
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 0 12px 0 #cccccc;
    min-width: 200px;
    text-align: center;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
        box-shadow: 0 0 4px 0 #cccccc;
    }
`

export const formHolder = css`
    width: 300px;
`

export const header = css`
    margin-bottom: 30px;
`
