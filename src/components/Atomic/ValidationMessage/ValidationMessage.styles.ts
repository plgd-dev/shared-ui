import { css } from '@emotion/react'
import { getThemeColor, ThemeType } from '../_theme'

export const validationMessage = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `ValidationMessage.color`)};
`
