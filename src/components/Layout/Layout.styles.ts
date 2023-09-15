import { css } from '@emotion/react'
import { panelSizes } from './LeftPanel/constants'
import { COLLAPSE_ANIMATION_TIME } from './constants'
import { ThemeType, get } from '../Atomic/_theme'

export const layout = (theme: ThemeType) => css`
    display: flex;
    height: 100%;
    width: 100%;
    background: ${get(theme, `Layout.background`)};
`

export const left = css`
    flex: 0 0 ${panelSizes.FULL}px;
    transition: all ${COLLAPSE_ANIMATION_TIME};
`

export const collapsed = css`
    flex: 0 0 ${panelSizes.COLLAPSED}px;
`

export const right = css`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    transition: all ${COLLAPSE_ANIMATION_TIME};
    overflow: hidden;
`

export const content = css`
    flex: 1 1 auto;
    overflow: auto;
    height: 100%;
`
