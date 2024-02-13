import { css } from '@emotion/react'
import { fontPrimary } from '../_utils/commonStyles'
import { ThemeType, get } from '../_theme'

export const global = (theme: ThemeType) => css`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: ${get(theme, `Global.fontPrimary`, fontPrimary)};
        font-size: ${get(theme, `Global.fontSize`, '14px')};
        line-height: ${get(theme, `Global.lineHeight`, '22px')};
        font-weight: 400;
    }
`
