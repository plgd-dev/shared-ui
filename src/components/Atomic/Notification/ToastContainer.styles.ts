import { css } from '@emotion/react'
import { getThemeColor, ThemeType } from '../_theme'

export const toastGlobal = (theme: ThemeType) => css`
    .plgd-toast {
        background: ${getThemeColor(theme, 'Toast.background')};
    }
`
