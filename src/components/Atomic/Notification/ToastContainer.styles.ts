import { css } from '@emotion/react'
import { get, ThemeType } from '../_theme'

export const toastGlobal = (theme: ThemeType) => css`
    .plgd-toast {
        background: ${get(theme, 'Toast.background')};
    }
`
