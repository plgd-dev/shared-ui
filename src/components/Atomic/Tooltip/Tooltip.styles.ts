import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const tooltip = css`
    .tooltip-bubble {
        background: #191a1a;
        box-shadow: 0 30px 40px rgba(28, 52, 99, 0.15);
        border-radius: 4px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #fff;
        padding: 6px 8px;
    }

    .tooltip-arrow {
        position: absolute;
        background: #191a1a;
        width: 8px;
        height: 8px;
        transform: rotate(45deg);
    }
`

export const error = css`
    .tooltip-bubble-error {
        background: ${colors.red} !important;
    }

    .tooltip-arrow-error {
        background: ${colors.red} !important;
    }
`
