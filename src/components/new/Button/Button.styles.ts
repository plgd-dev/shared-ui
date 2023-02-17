import { css } from '@emotion/react'
import { ButtonIconPositionType, ButtonVariantsType } from './Button.types'
import { iconPositions } from './constants'
import { get, ThemeType } from '../_theme'

export const button = (variant: ButtonVariantsType | undefined, disabled: boolean | undefined) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    border-radius: 8px;
    white-space: nowrap;
    box-sizing: border-box;
    cursor: pointer;
`

export const variant = (variant: ButtonVariantsType | undefined, theme: ThemeType) => css`
    background: ${get(theme, `Button.${variant}.background`)};
    border: 1px solid ${get(theme, `Button.${variant}.borderColor`)};
    color: ${get(theme, `Button.${variant}.color`)};

    &:hover {
        background: ${get(theme, `Button.${variant}.hover.background`)};
        border-color: ${get(theme, `Button.${variant}.hover.borderColor`)};
        color: ${get(theme, `Button.${variant}.hover.color`)};
    }
`

export const variantDisabled = (variant: ButtonVariantsType | undefined, theme: ThemeType) => css`
    background: ${get(theme, `Button.${variant}.disabled.background`)};
    border: 1px solid ${get(theme, `Button.${variant}.disabled.borderColor`)};
    color: ${get(theme, `Button.${variant}.disabled.color`)};
    cursor: not-allowed;

    &:hover {
        background: ${get(theme, `Button.${variant}.disabled.background`)};
        border-color: ${get(theme, `Button.${variant}.disabled.borderColor`)};
        color: ${get(theme, `Button.${variant}.disabled.color`)};
    }
`

export const big = css`
    padding: 16px 32px;
    font-size: 16px;
    line-height: 26px;
`

export const normal = css`
    padding: 10px 24px;
    font-size: 14px;
    line-height: 16px;
    height: 48px;
`

export const small = css`
    padding: 8px 12px;
    font-size: 14px;
    line-height: 20px;
`

const getIconMargin = (position: ButtonIconPositionType) =>
    position === iconPositions.ICON_LEFT
        ? css`
              margin-right: 8px;
          `
        : css`
              margin-left: 8px;
          `

export const icon = (position: ButtonIconPositionType) => css`
    display: flex;
    align-items: center;
    ${getIconMargin(position)};
`

export const loadingIcon = css`
    width: 20px;
    height: 20px;
    overflow: hidden;
    display: block;
`

export const fullWidth = css`
    flex: 1 1 auto;
`
