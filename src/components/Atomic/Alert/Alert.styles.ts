import { css } from '@emotion/react'
import { colors, hexToRGB } from '../_utils/colors'

export const alert = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    border-radius: 8px;
    background: ${hexToRGB(colors.primaryBright, 0.15)};
    color: ${colors.primary};
`

export const success = css`
    background: ${hexToRGB(colors.green, 0.15)};
    color: ${colors.green};
`

export const warning = css`
    background: ${hexToRGB(colors.yellow, 0.15)};
    color: ${colors.yellow};
`

export const error = css`
    background: ${hexToRGB(colors.red, 0.15)};
    color: ${colors.red};
`

export const label = css`
    padding-left: 12px;
    color: ${colors.neutral600};
`
