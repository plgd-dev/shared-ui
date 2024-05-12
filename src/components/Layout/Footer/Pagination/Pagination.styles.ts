import { css } from '@emotion/react'
import { colors } from '../../../Atomic/_utils/colors'
import { ThemeType, getThemeColor, getTheme } from '../../../Atomic/_theme'
import { fontPrimary } from '../../../Atomic/_utils/commonStyles'

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
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
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
        color: ${getThemeColor(theme, `Pagination.item.hover.color`)};
        text-decoration: none !important;
    }
`

export const active = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `Pagination.item.active.color`)};
    font-weight: 600;
    background: ${getThemeColor(theme, `Pagination.item.active.background`)};
    border-radius: 4px;
    cursor: default;

    &:hover {
        color: ${getThemeColor(theme, `Pagination.item.active.hover.color`)};
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
