import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { ThemeType, get } from '../_theme'

export const tag = (theme: ThemeType) => css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    background: ${get(theme, `Tag.background`)};
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.neutral500};
    padding: 3px 8px;
    border: 1px solid ${get(theme, `Tag.blue.borderColor`)};
    white-space: nowrap;
`

export const clickable = css`
    cursor: pointer;
`

export const icon = css`
    margin-right: 4px;
`

export const blue = (theme: ThemeType) => css`
    color: ${get(theme, `Tag.blue.color`)};
    background: ${get(theme, `Tag.blue.background`)};
    border: 1px solid ${get(theme, `Tag.blue.borderColor`)};
`

export const white = (theme: ThemeType) => css`
    color: ${colors.neutral500};
    background: ${get(theme, `Tag.white.background`)};
    border: 1px solid ${get(theme, `Tag.blue.borderColor`)};
`
