import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { hexToRgbA } from '../_utils/commonStyles'
import { ThemeType, get } from '../_theme'

export const alert = (theme: ThemeType) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    border-radius: 8px;
    background: ${get(theme, 'Alert.background')};
    color: ${colors.primary};
    box-shadow: 0 30px 40px 0 rgba(28, 52, 99, 0.1);
    border: 1px solid ${get(theme, 'Alert.borderColor')};
    position: relative;
    overflow: hidden;

    &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        height: 100%;
        background: ${get(theme, 'Alert.line.background')};
    }
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

export const icon = (theme: ThemeType) => css`
    flex: 0 0 24px;
    color: ${get(theme, 'Alert.icon.color')};
`

export const label = css`
    padding-left: 12px;
    color: ${colors.neutral600};
`

export const iconClose = (theme: ThemeType) => css`
    flex: 0 0 32px;
    padding-left: 12px;
    color: ${get(theme, 'Alert.close.color')};
`
