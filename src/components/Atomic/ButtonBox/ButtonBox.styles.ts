import { css } from '@emotion/react'
import { get, ThemeType } from '../_theme'

export const buttonBox = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: ${get(theme, `ButtonBox.background`)};
    border-radius: 8px;
`

export const btn = css`
    min-width: 250px;
`
