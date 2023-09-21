import { css } from '@emotion/react'
import { ThemeType, get } from '../../Atomic/_theme'

export const title = (theme: ThemeType) => css`
    font-family: 'Circular Pro', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.5px;
    margin: 0;
    color: ${get(theme, `NotFound.title.color`)};
`

export const message = css`
    padding-top: 15px;
`
