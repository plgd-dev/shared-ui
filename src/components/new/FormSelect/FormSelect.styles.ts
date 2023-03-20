import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { fontPrimary } from '../_utils/commonStyles'

export const select = css`
    .select__control {
        height: 44px;
        min-height: 44px;
        border: 1px solid ${colors.neutral300};
        border-radius: 8px;

        .select__value-container {
            .select__placeholder {
                color: #81868c;
            }

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
    }

    .select__single-value {
        text-align: left;
    }

    .select__indicator-separator {
        display: none;
    }
`

export const menu = css`
    margin-top: 4px;
    margin-bottom: 4px;
    border: 1px solid ${colors.neutral300};
    box-shadow: none;
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
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    display: flex;
    align-items: center;
    background: transparent;
    transition: all 0.3s;
    cursor: pointer;
    padding: 8px 16px;

    &:hover {
        color: ${colors.primaryBonus};
        background: transparent;
    }

    &:active {
        background: transparent;
    }
`

export const optionSelected = css`
    color: ${colors.primaryBonus};
    background: transparent;
`

export const selectContainer = css`
    width: 100%;
`

export const valueContainer = css`
    padding: 0 16px;
`

export const value = css`
    color: ${colors.neutral800};
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
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
