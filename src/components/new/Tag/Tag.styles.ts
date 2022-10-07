import { css } from '@emotion/react'
import { TagTypeType } from './Tag.types'
import { tagVariants } from './constants'
import { colors } from '../_utils/colors'

const getColorByVariant = (variant: TagTypeType) => {
    if (variant === tagVariants.SUCCESS) {
        return css`
            background: ${colors.green};
        `
    } else if (variant === tagVariants.ERROR) {
        return css`
            background: ${colors.error};
        `
    }
}

export const tag = (variant: TagTypeType) => css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    padding: 1px 8px;
    gap: 10px;
    border-radius: 4px;
    ${getColorByVariant(variant)};
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 160%;
    color: #ffffff;
`
