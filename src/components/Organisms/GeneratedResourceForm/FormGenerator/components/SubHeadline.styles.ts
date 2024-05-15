import { css } from '@emotion/react'
import { getTheme, getThemeColor, ThemeType } from '../../../../Atomic/_theme'

export const wrapper = css`
    position: relative;
`

export const headline = (theme: ThemeType) => css`
    text-transform: capitalize;
    background: ${getThemeColor(theme, `Modal.content.background`)};
    position: relative;
    z-index: 2;
`

export const headlineLine = css`
    display: inline-flex;
    align-items: center;
    gap: 12px;

    &:hover {
        text-decoration: none !important;
    }
`

export const line = css`
    position: absolute;
    bottom: calc(50% + 8px) !important;
    left: -20px;
    background: #f2f3f5;
    height: calc(100% + 20px);
    width: 2px;
    z-index: 1;

    &:after {
        content: '';
        position: absolute;
        width: 14px;
        height: 10px;
        bottom: -8px;
        left: 0;
        border-left: 2px solid #f2f3f5;
        border-bottom: 2px solid #f2f3f5;
        border-bottom-left-radius: 20px;
    }
`

export const icon = (theme: ThemeType) => css`
    transform: rotate(180deg);
    transition: all 0.3s;
    display: block;
    color: ${getTheme(theme, `Global.iconColor`)};

    &:hover {
        color: ${getTheme(theme, `colorPalette.primary`)};
    }
`

export const iconExpanded = css`
    transform: rotate(0deg);
`
