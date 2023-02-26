import { css } from '@emotion/react'
import { panelSizes } from './LeftPanel/constants'

export const layout = css`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const left = css`
    flex: 0 0 ${panelSizes.FULL}px;
`

export const collapsed = css`
    flex: 0 0 ${panelSizes.COLLAPSED}px;
`

export const right = css`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
`

export const content = css`
    flex: 1 1 auto;
    overflow: auto;
`
