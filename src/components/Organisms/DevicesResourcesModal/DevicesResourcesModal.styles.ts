import { css } from '@emotion/react'
import { getThemeColor, ThemeType } from '../../Atomic/_theme'

export const flexLine = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const contentHeadline = (theme: ThemeType) => css`
    background: ${getThemeColor(theme, `Modal.content.background`)};
    position: relative;
    z-index: 2;
`
