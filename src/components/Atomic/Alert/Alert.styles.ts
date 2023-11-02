import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { hexToRgbA } from '../_utils/commonStyles'
import { ThemeType, get } from '../_theme'

export const alert = (theme: ThemeType) => css`
    display: inline-grid;
    padding: 12px 20px;
    border-radius: 8px;
    background: ${get(theme, 'Alert.background')};
    box-shadow: 0 2px 10px 0 rgba(28, 52, 99, 0.1);
    border: 1px solid ${get(theme, 'Alert.borderColor')};
    position: relative;
    overflow: hidden;
    grid: auto / auto auto auto;

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

export const success = (theme: ThemeType) => css`
    background: ${hexToRgbA(get(theme, 'Alert.success.background', colors.green), 0.15)};

    &:before {
        background: ${get(theme, 'Alert.success.line.background')};
    }
`

export const iconSuccess = (theme: ThemeType) => css`
    color: ${get(theme, 'Alert.success.icon.color')};
`

export const warning = (theme: ThemeType) => css`
    background: ${hexToRgbA(get(theme, 'Alert.warning.background', colors.yellow), 0.15)};

    &:before {
        background: ${get(theme, 'Alert.warning.line.background')};
    }
`

export const iconWarning = (theme: ThemeType) => css`
    color: ${get(theme, 'Alert.warning.icon.color')};
`

export const error = (theme: ThemeType) => css`
    background: ${hexToRgbA(get(theme, 'Alert.error.background', colors.red), 0.15)};

    &:before {
        background: ${get(theme, 'Alert.error.line.background')};
    }
`

export const iconError = (theme: ThemeType) => css`
    color: ${get(theme, 'Alert.error.icon.color')};
`

export const icon = (theme: ThemeType) => css`
    cursor: pointer;
    flex: 0 0 24px;
    color: ${get(theme, 'Alert.icon.color')};
`

export const label = css`
    padding-left: 12px;
    color: ${colors.neutral600};
`

export const iconClose = (theme: ThemeType) => css`
    flex: 0 0 32px;
    width: 32px;
    padding-left: 12px;
    color: ${get(theme, 'Alert.close.color')};
`
