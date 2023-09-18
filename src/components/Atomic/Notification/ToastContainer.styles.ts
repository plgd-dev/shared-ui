import { css } from '@emotion/react'
import { get, ThemeType } from '../_theme'

export const test = (theme: ThemeType) => css`
    .plgd-toast {
        background: ${get(theme, 'Toast.background')};
        border: 1px solid ${get(theme, 'Toast.borderColor')};
    }
`
