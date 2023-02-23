import { css } from '@emotion/react'

export const container = css`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
`

export const animatedContainer = css`
    flex-direction: row;
    direction: ltr;
    will-change: transform;
    min-height: 0;
    flex: 1;
    display: flex;
`

export const page = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: stretch;
    justify-content: flex-start;
    flex-shrink: 0;
    height: 100%;
    overflow: hidden;
    outline: none;
`
