import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const select = css`
    .select__control {
        height: 40px;
        min-height: 40px;
        border: 1px solid ${colors.neutral300};
        border-radius: 8px;

        .select__value-container {
            padding-left: 16px;

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

    .select__menu-list {
        text-align: left;
    }
`
