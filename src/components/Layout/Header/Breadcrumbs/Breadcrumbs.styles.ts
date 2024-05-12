import { css } from '@emotion/react'
import { colors } from '../../../Atomic/_utils/colors'
import { ThemeType, getThemeColor, getTheme } from '../../../Atomic/_theme'
import { fontPrimary } from '../../../Atomic/_utils/commonStyles'

export const breadcrumbs = css`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const divider = (theme: ThemeType) => css`
    display: inline-block;
    padding: 0 3px;
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${colors.neutral500};
    position: relative;
    top: 1px;
`

export const item = (theme: ThemeType) => css`
    display: block;
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.neutral500};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
`

export const link = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, 'Breadcrumb.link.color')};
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        color: ${getThemeColor(theme, 'Breadcrumb.link.hover.color')};
    }
`
