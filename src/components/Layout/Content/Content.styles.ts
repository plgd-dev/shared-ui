import { css } from '@emotion/react'
import { ThemeType, get } from '../../Atomic/_theme'

export const content = (theme: ThemeType) => css`
    background: ${get(theme, `Content.background`)};
    padding: 24px 40px 0 24px;
`

export const header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
`

export const left = css`
    display: flex;
    align-items: center;
    flex: 1 1 auto;
`

export const rightActions = css`
    display: flex;
    padding: 0;
    margin: 0 -4px;
    list-style: none;
`

export const rightAction = css`
    display: flex;
    padding: 0 4px;
`

export const headline = (theme: ThemeType) => css`
    color: ${get(theme, `Content.headline.color`)};
`

export const statusTag = css`
    padding-left: 8px;
`
