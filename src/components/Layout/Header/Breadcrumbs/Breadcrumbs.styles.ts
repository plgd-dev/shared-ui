import { css } from '@emotion/react'
import { colors } from '../../../Atomic/_utils/colors'
import { ThemeType, get } from '../../../Atomic/_theme'

export const breadcrumbs = css`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const divider = css`
    display: inline-block;
    padding: 0 3px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${colors.neutral500};
    position: relative;
    top: 1px;
`

export const item = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.neutral500};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const link = (theme: ThemeType) => css`
    color: ${get(theme, 'Breadcrumb.link.color')};
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        color: ${get(theme, 'Breadcrumb.link.hover.color')};
    }
`
