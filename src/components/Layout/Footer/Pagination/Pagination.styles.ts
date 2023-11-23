import { css } from '@emotion/react'
import { colors } from '../../../Atomic/_utils/colors'
import { ThemeType, get } from '../../../Atomic/_theme'

export const pagination = css`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
`

export const item = (theme: ThemeType) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: ${colors.neutral500};
    text-decoration: none;
    height: 32px;
    min-width: 32px;
    margin: 0 2px;

    &:hover {
        color: ${get(theme, `Pagination.item.hover.color`)};
        text-decoration: none !important;
    }
`

export const active = (theme: ThemeType) => css`
    color: ${get(theme, `Pagination.item.active.color`)};
    font-weight: 600;
    background: ${get(theme, `Pagination.item.active.background`)};
    border-radius: 4px;
    cursor: default;

    &:hover {
        color: ${get(theme, `Pagination.item.active.hover.color`)};
        text-decoration: none;
    }
`

export const disabled = css`
    color: ${colors.neutral300};
    cursor: not-allowed;

    &:hover {
        color: ${colors.neutral300};
    }
`
