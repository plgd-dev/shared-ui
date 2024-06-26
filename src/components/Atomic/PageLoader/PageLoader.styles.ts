import { css, keyframes } from '@emotion/react'
import { ThemeType, getThemeColor } from '../_theme'
import { panelSizes } from '../../Layout/LeftPanel/constants'

const increase = keyframes`
  from {
    left: -5%;
    width: 5%;
  }
  to {
    left: 130%;
    width: 100%;
  }
`

const decrease = keyframes`
  from {
    left: -80%;
    width: 80%;
  }
  to {
    left: 110%;
    width: 10%;
  }
`

export const pageLoader = (collapsed?: boolean) => css`
    position: fixed;
    top: 85px;
    left: ${collapsed ? panelSizes.COLLAPSED : panelSizes.FULL}px;
    width: 100%;
    z-index: 9;
`

export const noOffset = css`
    left: 0;
`

export const bar = css`
    width: 100%;
    height: 5px;
    overflow: hidden;
    position: relative;
`

export const progress = css`
    width: 100%;
    height: 5px;
    background-color: transparent;
`

export const subline = (theme: ThemeType) => css`
    position: absolute;
    background-color: ${getThemeColor(theme, `PageLoader.bar.background`)};
    height: 5px;
`

export const inc = css`
    animation: ${increase} 2s infinite;
`

export const dec = css`
    animation: ${decrease} 2s 0.5s infinite;
`
