import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { hexToRgbA } from '../_utils/commonStyles'

export const alert = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    border-radius: 8px;
    background: ${hexToRgbA(colors.primaryBright, 0.15)};
    color: ${colors.primary};
`

export const success = css`
    background: ${hexToRgbA(colors.green, 0.15)};
    color: ${colors.green};
`

export const warning = css`
    background: ${hexToRgbA(colors.yellow, 0.15)};
    color: ${colors.yellow};
`

export const error = css`
    background: ${hexToRgbA(colors.red, 0.15)};
    color: ${colors.red};
`

export const label = css`
    padding-left: 12px;
    color: ${colors.neutral600};
`
