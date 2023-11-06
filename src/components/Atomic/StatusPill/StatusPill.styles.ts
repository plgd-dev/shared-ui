import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { ThemeType, get } from '../_theme'

export const statusPill = css`
    display: flex;
    align-items: center;
`

export const statusLine = css`
    width: 4px;
    height: 24px;
    border-radius: 6px;
`

export const online = (theme: ThemeType) => css`
    background-color: ${get(theme, 'StatusPill.statusLine.green')};
`

export const offline = (theme: ThemeType) => css`
    background-color: ${get(theme, 'StatusPill.statusLine.red')};
`

export const occupied = (theme: ThemeType) => css`
    background-color: ${get(theme, 'StatusPill.statusLine.occupied')};
`

export const label = css`
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: ${colors.neutral500};
`

export const content = css`
    padding-left: 8px;
`

export const pending = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: ${colors.primary};
    padding-top: 4px;
    cursor: pointer;
    white-space: nowrap;
`
