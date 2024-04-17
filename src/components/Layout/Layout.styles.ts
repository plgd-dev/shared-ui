import { css } from '@emotion/react'
import { panelSizes } from './LeftPanel/constants'
import { COLLAPSE_ANIMATION_TIME } from './constants'
import { ThemeType, get } from '../Atomic/_theme'
import { colors } from '../Atomic/_utils/colors'

export const layout = (theme: ThemeType) => css`
    display: flex;
    height: 100%;
    width: 100%;
    background: ${get(theme, `Layout.background`)};
`

export const previewMode = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background: ${colors.neutral800};
    height: 40px;
`

export const smallerLayout = css`
    height: calc(100% - 40px);
`

export const left = css`
    flex: 0 0 ${panelSizes.FULL}px;
    transition: all ${COLLAPSE_ANIMATION_TIME}ms;
`

export const collapsed = css`
    flex: 0 0 ${panelSizes.COLLAPSED}px;
`

export const right = css`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    transition: all ${COLLAPSE_ANIMATION_TIME}ms;
    overflow: hidden;
`

export const content = css`
    flex: 1 1 auto;
    overflow: auto;
    height: 100%;
`
