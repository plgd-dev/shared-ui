import { css } from '@emotion/react'
import { TagTypeType } from './Tag.types'
import { tagVariants } from './constants'
import { colors } from '../_utils/colors'

const getColorByVariant = (variant: TagTypeType) => {
    if (variant === tagVariants.SUCCESS) {
        return css`
            color: ${colors.green};
            background: rgba(82, 197, 162, 0.16);
        `
    } else if (variant === tagVariants.WARNING) {
        return css`
            color: ${colors.yellow};
            background: rgba(254, 191, 64, 0.24);
        `
    } else if (variant === tagVariants.ERROR) {
        return css`
            color: ${colors.error};
            background: rgba(215, 78, 58, 0.16);
        `
    } else if (variant === tagVariants.NORMAL) {
        return css`
            color: ${colors.neutral500};
            background: #f6f7f9;
        `
    }
}

export const tag = (variant: TagTypeType) => css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    padding: 1px 10px;
    gap: 10px;
    border-radius: 44px;
    ${getColorByVariant(variant)};
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 160%;
`
