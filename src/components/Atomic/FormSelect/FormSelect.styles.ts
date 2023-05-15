import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { fontPrimary } from '../_utils/commonStyles'
import { FormSelectSizeType } from './FormSelect.types'

export const select = (size: FormSelectSizeType, disabled?: boolean) => css`
    .select__control {
        .select__value-container {
            .select__placeholder,
            .select__input-container {
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;

                input {
                    font-family: 'Poppins', sans-serif !important;
                    font-style: normal !important;
                    font-weight: 400 !important;
                    font-size: 14px !important;
                    line-height: 22px !important;
                    color: ${colors.neutral800}!important;
                }
            }
        }

        &.select__control--menu-is-open {
            ${!disabled &&
            css`
                border: 1px solid ${colors.primaryBonus};
            `}
        }

        &.select__control--is-focused {
            box-shadow: none;
        }
    }

    .select__indicator-separator {
        display: none;
    }

    .select__input-container {
        margin: 0;
    }
`

export const control = css`
    height: 44px;
    min-height: 44px;
    border-radius: 8px;
    box-shadow: none;
    transition: all 0.3s;
    border: 1px solid ${colors.neutral300};

    &:focus {
        outline: none;
    }

    &:hover {
        outline: none;
        border: 1px solid ${colors.primaryBonus};
    }
`

export const small = css`
    height: 36px;
    min-height: 36px;
`

export const error = css`
    border-color: ${colors.red}!important;
`

export const menu = css`
    margin-top: 4px;
    margin-bottom: 4px;
    border: 1px solid ${colors.neutral200};
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
`

export const menuList = css`
    text-align: left;
    padding: 8px 0;
`

export const option = css`
    color: ${colors.neutral500};
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    font-size: 14px;
    display: flex;
    align-items: center;
    background: transparent;
    transition: all 0.3s;
    cursor: pointer;
    padding: 8px 16px;

    &:hover {
        color: ${colors.primary};
        background: transparent;
    }

    &:active {
        background: transparent;
    }
`

export const optionSelected = css`
    color: ${colors.neutral800};
    background: transparent;
`

export const selectContainer = css`
    width: 100%;
`

export const valueContainer = css`
    padding: 0 15px; // -1 for border
`

export const value = css`
    color: ${colors.neutral800};
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
`

export const dropdownIndicator = css`
    padding-right: 16px;
`

export const indicator = css`
    transition: all 0.3s;
    color: ${colors.neutral500};
`

export const indicatorOpen = css`
    transform: rotate(180deg);
`

export const placeholder = css`
    color: ${colors.neutral800};
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`

export const disabled = css`
    color: ${colors.neutral500};
`
