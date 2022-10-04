import { css } from '@emotion/react'
import { ButtonIconPositionType, ButtonSizesType, ButtonVariantsType } from './Button.types'
import { buttonSizes, buttonVariants, iconPositions } from './constants'

const getColors = (variant: ButtonVariantsType | undefined, disabled: boolean | undefined) => {
    switch (variant) {
        case buttonVariants.PRIMARY:
            return css`
                background: ${disabled ? '#d7d8da' : '#2261ae'};
                border: 1px solid ${disabled ? '#d7d8da' : '#2261ae'};
                color: #fff;

                &:hover {
                    background: ${disabled ? '#d7d8da' : '#1d589f'};
                    border-color: ${disabled ? '#d7d8da' : '#1d589f'};
                }
            `
        case buttonVariants.SECONDARY:
            return css`
                background: #fff;
                border: 1px solid ${disabled ? '#D7D8DA' : '#2261ae'};
                color: ${disabled ? '#D7D8DA' : '#2261ae'};

                &:hover {
                    border-color: ${disabled ? '#D7D8DA' : '#1D589F'};
                    color: ${disabled ? '#D7D8DA' : '#1D589F'};
                }
            `
        case buttonVariants.TERTIARY:
            return css`
                background: ${disabled ? '#F6F7F9' : '#f6f7f9'};
                border: 1px solid #f6f7f9;
                color: ${disabled ? '#D7D8DA' : '#191a1a'};

                &:hover {
                    background: ${disabled ? '#F6F7F9' : '#E6E9ED'};
                    border-color: ${disabled ? '#F6F7F9' : '#f6f7f9'};
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
