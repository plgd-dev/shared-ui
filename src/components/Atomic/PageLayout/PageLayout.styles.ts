import { css } from '@emotion/react'
import { ThemeType, get } from '../_theme'

export const pageLayout = css`
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const top = css`
    padding: 24px 40px 0 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: hidden;
`

export const header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    min-height: 72px;
`

export const left = css`
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    position: relative;
    z-index: 1;
`

export const headline = (theme: ThemeType) => css`
    color: ${get(theme, 'PageLayout.headline.color')};
`

export const statusTag = css`
    padding-left: 8px;
`

export const rightActions = css``