import { css } from '@emotion/react'
import { get, ThemeType } from '../_theme'

export const validationMessage = (theme: ThemeType) => css`
    color: ${get(theme, `ValidationMessage.color`)};
`
