import { css } from '@emotion/react'
import { colors } from '../../Atomic/_utils/colors'
import { ThemeType, getThemeColor } from '../../Atomic/_theme'

export const header = (theme: ThemeType) => css`
    background-color: ${getThemeColor(theme, `Header.background`)};
    height: 85px;
    padding: 20px 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${getThemeColor(theme, `Header.borderBottom`)};
`

export const left = css`
    display: flex;
    align-items: center;
`

export const iconCollapse = css`
    color: ${colors.neutral500};
`

export const breadcrumbs = css`
    padding-left: 35px;
`

export const right = css`
    display: flex;
`

export const actions = css`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
`

export const action = css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.neutral500};
`
