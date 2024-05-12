import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { getTheme, getThemeColor, ThemeType } from '../_theme'
import { fontPrimary } from '../_utils/commonStyles'

export const tooltip = (theme: ThemeType) => css`
    .tooltip-bubble {
        background: ${getThemeColor(theme, `Tooltip.bubble.background`)};
        box-shadow: 0 30px 40px rgba(28, 52, 99, 0.15);
        border-radius: 4px;
        font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: ${getThemeColor(theme, `Tooltip.bubble.color`)};
        padding: 6px 8px;
        text-align: center;
    }

    .tooltip-arrow {
        position: absolute;
        background: ${getThemeColor(theme, `Tooltip.bubble.background`)};
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
    color: ${getThemeColor(theme, `Tooltip.icon.color`)};

    &:hover {
        color: ${getThemeColor(theme, `Tooltip.icon.hover.color`)};
    }
`
