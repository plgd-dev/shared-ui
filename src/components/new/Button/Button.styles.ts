import { css } from '@emotion/react'
import { ButtonIconPositionType, ButtonSizesType, ButtonVariantsType } from './Button.types'
import { buttonSizes, buttonVariants, iconPositions } from './constants'
import { colors, colorsVariants } from '../_utils/colors'

const getColors = (variant: ButtonVariantsType | undefined, disabled: boolean | undefined) => {
    switch (variant) {
        case buttonVariants.PRIMARY:
            return css`
                background: ${disabled ? colors.disabled : colors.primary};
                border: 1px solid ${disabled ? colors.disabled : colors.primary};
                color: ${colorsVariants.primary.text};

                &:hover {
                    background: ${disabled ? colors.disabled : colorsVariants.primary.hover};
                    border-color: ${disabled ? colors.disabled : colorsVariants.primary.hover};
                }
            `
        case buttonVariants.SECONDARY:
            return css`
                background: ${colorsVariants.secondary.background};
                border: 1px solid ${disabled ? colors.disabled : colors.primary};
                color: ${disabled ? colors.disabled : colors.primary};

                &:hover {
                    border-color: ${disabled ? colors.disabled : colorsVariants.secondary.hover};
                    color: ${disabled ? colors.disabled : colorsVariants.secondary.hover};
                }
            `
        case buttonVariants.TERTIARY:
            return css`
                background: ${colorsVariants.tertiary.background};
                border: 1px solid ${colors.tertiary};
                color: ${disabled ? colors.disabled : colorsVariants.tertiary.text};

                &:hover {
                    background: ${disabled ? colors.tertiary : colorsVariants.tertiary.hover};
                    border-color: ${colors.tertiary};
                }
            `
    }
}

const getSizes = (size: ButtonSizesType | undefined) => {
    switch (size) {
        case buttonSizes.BIG:
            return css`
                padding: 16px 32px;
                font-size: 16px;
                line-height: 26px;
            `
        case buttonSizes.NORMAL:
            return css`
                padding: 14px 24px;
                font-size: 14px;
                line-height: 16px;
            `
        case buttonSizes.SMALL:
            return css`
                padding: 8px 12px;
                font-size: 14px;
                line-height: 20px;
            `
    }
}

export const button = (variant: ButtonVariantsType | undefined, size: ButtonSizesType | undefined, disabled: boolean | undefined) => css`
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
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    ${getColors(variant, disabled)};
    ${getSizes(size)};
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
    width: 100%;
`
