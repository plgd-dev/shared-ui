import { css } from '@emotion/react'
import { ThemeType, get } from '../_theme'

export const colorPicker = (theme: ThemeType) => css`
    display: inline-flex;
    align-items: center;
    padding: 4px;
    background: ${get(theme, `ColorPicker.background`)};
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid ${get(theme, `ColorPicker.borderColor`)};
`

export const color = css`
    width: 40px;
    height: 16px;
    border-radius: 8px;
`

export const hex = css`
    width: 115px;
`

export const rgba = css`
    width: 180px;
`

export const label = (theme: ThemeType) => css`
    font-size: 12px;
    display: block;
    padding: 0 8px;
    color: ${get(theme, `ColorPicker.label.color`)};
`

export const floatingMenu = (theme: ThemeType) => css`
    z-index: 10;
    border: 1px solid ${get(theme, `ColorPicker.floatingMenu.borderColor`)};
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    overflow: hidden;
`
