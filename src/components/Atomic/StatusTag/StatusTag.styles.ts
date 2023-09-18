import { css } from '@emotion/react'
import { TagTypeType } from './StatusTag.types'
import { tagVariants } from './constants'
import { ThemeType, get } from '../_theme'

const getColorByVariant = (theme: ThemeType, variant: TagTypeType) => {
    if (variant === tagVariants.SUCCESS) {
        return css`
            color: ${get(theme, 'StatusTag.success.color')};
            background: ${get(theme, 'StatusTag.success.background')};
        `
    } else if (variant === tagVariants.WARNING) {
        return css`
            color: ${get(theme, 'StatusTag.warning.color')};
            background: ${get(theme, 'StatusTag.warning.background')};
        `
    } else if (variant === tagVariants.ERROR) {
        return css`
            color: ${get(theme, 'StatusTag.error.color')};
            background: ${get(theme, 'StatusTag.error.background')};
        `
    } else if (variant === tagVariants.NORMAL) {
        return css`
            color: ${get(theme, 'StatusTag.normal.color')};
            background: ${get(theme, 'StatusTag.normal.background')};
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
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-transform: lowercase;
`
