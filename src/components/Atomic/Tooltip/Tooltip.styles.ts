import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { get, ThemeType } from '../_theme'

export const tooltip = (theme: ThemeType) => css`
    .tooltip-bubble {
        background: ${get(theme, `Tooltip.bubble.background`)};
        box-shadow: 0 30px 40px rgba(28, 52, 99, 0.15);
        border-radius: 4px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: ${get(theme, `Tooltip.bubble.color`)};
        padding: 6px 8px;
        text-align: center;
    }

    .tooltip-arrow {
        position: absolute;
        background: ${get(theme, `Tooltip.bubble.background`)};
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

export const iconTooltip = (theme: ThemeType) => css`
    color: ${get(theme, `Tooltip.icon.color`)};

    &:hover {
        color: ${get(theme, `Tooltip.icon.hover.color`)};
    }
`
