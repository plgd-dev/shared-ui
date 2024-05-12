import { css } from '@emotion/react'
import { fontPrimary } from '../_utils/commonStyles'
import { ThemeType, getTheme } from '../_theme'

export const global = (theme: ThemeType) => css`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
        font-size: ${getTheme(theme, `Global.fontSize`, '14px')};
        line-height: ${getTheme(theme, `Global.lineHeight`, '22px')};
        font-weight: 400;
    }
`
