import { css } from '@emotion/react'
import { colors } from '../../_utils/colors'
import { ThemeType, getThemeColor } from '../../_theme'

export const actionItems = css`
    display: flex;
    margin: 0 -10px;
    align-items: center;
`

export const actionItem = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
`

export const icon = (theme: ThemeType) => css`
    cursor: pointer;
    color: ${colors.neutral500};
    transition: all 0.25s;

    &:hover {
        color: ${getThemeColor(theme, `TableActions.icon.hover.color`)};
    }
`
