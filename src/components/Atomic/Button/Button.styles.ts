import { css } from '@emotion/react'
import { ButtonIconPositionType, ButtonVariantsType } from './Button.types'
import { iconPositions } from './constants'
import { getTheme, getThemeColor, ThemeType } from '../_theme'
import { fontPrimary } from '../_utils/commonStyles'

export const button = (theme: ThemeType) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s;
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 600;
    text-align: center;
    border-radius: 8px;
    white-space: nowrap;
    box-sizing: border-box;
    cursor: pointer;
`

export const variant = (variant: ButtonVariantsType | undefined, theme: ThemeType) => css`
    background: ${getThemeColor(theme, `Button.${variant}.background`)};
    border: 1px solid ${getThemeColor(theme, `Button.${variant}.borderColor`)};
    color: ${getThemeColor(theme, `Button.${variant}.color`)};

    &:hover {
        background: ${getThemeColor(theme, `Button.${variant}.hover.background`)};
        border-color: ${getThemeColor(theme, `Button.${variant}.hover.borderColor`)};
        color: ${getThemeColor(theme, `Button.${variant}.hover.color`)};
    }
`

export const variantDisabled = (variant: ButtonVariantsType | undefined, theme: ThemeType) => css`
    background: ${getThemeColor(theme, `Button.${variant}.disabled.background`)};
    border: 1px solid ${getThemeColor(theme, `Button.${variant}.disabled.borderColor`)};
    color: ${getThemeColor(theme, `Button.${variant}.disabled.color`)};
    cursor: not-allowed !important;

    &:hover {
        background: ${getThemeColor(theme, `Button.${variant}.disabled.background`)};
        border-color: ${getThemeColor(theme, `Button.${variant}.disabled.borderColor`)};
        color: ${getThemeColor(theme, `Button.${variant}.disabled.color`)};
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

export const fullWidth = css`
    flex: 1 1 auto;
    width: 100%;
`

export const loadingWrapper = css`
    position: relative;
`

export const loadingText = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const sizeMeasure = css`
    visibility: hidden;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
