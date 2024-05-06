import { css } from '@emotion/react'
import { ThemeType, get } from '../_theme'

export const pageLayout = css`
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const top = css`
    padding: 24px 0 0 0;
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

export const headerBorder = (theme: ThemeType) => css`
    position: relative;

    &:after {
        content: '';
        display: block;
        position: absolute;
        left: 40px;
        right: 40px;
        bottom: 0;
        width: calc(100% - 80px);
        height: 1px;
        background: ${get(theme, 'PageLayout.headline.border.color')};
    }
`

export const padding = css`
    padding-left: 40px;
    padding-right: 40px;
`

export const contentPadding = css`
    height: 100%;
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
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 400px;
    white-space: nowrap;
`

export const statusTag = css`
    padding-left: 8px;
`

export const rightActions = css``
