import { css } from '@emotion/react'
import { ThemeType, getThemeColor, getTheme } from '../../Atomic/_theme'
import { fontSecondary } from '../../Atomic/_utils/commonStyles'

export const title = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontSecondary)};
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.5px;
    margin: 0;
    color: ${getThemeColor(theme, `NotFound.title.color`)};
`

export const message = css`
    padding-top: 15px;
`
