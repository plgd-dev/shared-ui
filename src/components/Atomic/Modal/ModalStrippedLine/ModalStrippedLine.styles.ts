import { css } from '@emotion/react'
import { colors } from '../../_utils/colors'
import { ThemeType, getThemeColor, getTheme } from '../../_theme'
import { fontPrimary } from '../../_utils/commonStyles'

export const strippedLine = (theme: ThemeType) => css`
    padding: 16px 0;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${getThemeColor(theme, `ModalStrippedLine.strippedLine.borderColor`)};
`

export const smallPadding = css`
    padding: 9px 0;
`

export const label = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral500};
`

export const component = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: right;
    color: ${getThemeColor(theme, `ModalStrippedLine.value.color`)};
`
