import { css } from '@emotion/react'
import { TagTypeType } from './StatusTag.types'
import { tagVariants } from './constants'
import { ThemeType, getThemeColor, getTheme } from '../_theme'
import { fontPrimary } from '../_utils/commonStyles'

const getColorByVariant = (theme: ThemeType, variant: TagTypeType) => {
    if (variant === tagVariants.SUCCESS) {
        return css`
            color: ${getThemeColor(theme, 'StatusTag.success.color')};
            background: ${getThemeColor(theme, 'StatusTag.success.background')};
        `
    } else if (variant === tagVariants.WARNING) {
        return css`
            color: ${getThemeColor(theme, 'StatusTag.warning.color')};
            background: ${getThemeColor(theme, 'StatusTag.warning.background')};
        `
    } else if (variant === tagVariants.ERROR) {
        return css`
            color: ${getThemeColor(theme, 'StatusTag.error.color')};
            background: ${getThemeColor(theme, 'StatusTag.error.background')};
        `
    } else if (variant === tagVariants.NORMAL) {
        return css`
            color: ${getThemeColor(theme, 'StatusTag.normal.color')};
            background: ${getThemeColor(theme, 'StatusTag.normal.background')};
        `
    } else if (variant === tagVariants.INFO) {
        return css`
            color: ${getThemeColor(theme, 'StatusTag.info.color')};
            background: ${getThemeColor(theme, 'StatusTag.info.background')};
        `
    }
}

export const tag = (theme: ThemeType, variant: TagTypeType) => css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    padding: 1px 10px;
    gap: 10px;
    border-radius: 44px;
    ${getColorByVariant(theme, variant)};
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
`

export const lowercase = css`
    text-transform: lowercase;
`
