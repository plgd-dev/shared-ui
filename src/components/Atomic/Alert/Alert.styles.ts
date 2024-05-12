import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { hexToRgbA } from '../_utils/commonStyles'
import { ThemeType, getThemeColor } from '../_theme'

export const alert = (theme: ThemeType) => css`
    display: inline-grid;
    padding: 12px 20px;
    border-radius: 8px;
    background: ${getThemeColor(theme, 'Alert.background')};
    box-shadow: 0 30px 40px 0 rgba(28, 52, 99, 0.1);
    border: 1px solid ${getThemeColor(theme, 'Alert.borderColor')};
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
        background: ${getThemeColor(theme, 'Alert.line.background')};
    }
`

export const success = (theme: ThemeType) => css`
    background: ${hexToRgbA(getThemeColor(theme, 'Alert.success.background', colors.green), 0.15)};

    &:before {
        background: ${getThemeColor(theme, 'Alert.success.line.background')};
    }
`

export const iconSuccess = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, 'Alert.success.icon.color')};
`

export const warning = (theme: ThemeType) => css`
    background: ${hexToRgbA(getThemeColor(theme, 'Alert.warning.background', colors.yellow), 0.15)};

    &:before {
        background: ${getThemeColor(theme, 'Alert.warning.line.background')};
    }
`

export const iconWarning = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, 'Alert.warning.icon.color')};
`

export const error = (theme: ThemeType) => css`
    background: ${hexToRgbA(getThemeColor(theme, 'Alert.error.background', colors.red), 0.15)};

    &:before {
        background: ${getThemeColor(theme, 'Alert.error.line.background')};
    }
`

export const iconError = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, 'Alert.error.icon.color')};
`

export const icon = (theme: ThemeType) => css`
    flex: 0 0 24px;
    color: ${getThemeColor(theme, 'Alert.icon.color')};
    position: relative;
    top: 2px;
`

export const label = (theme: ThemeType) => css`
    padding-left: 12px;
    color: ${getThemeColor(theme, 'Alert.label.color')};
    line-height: 18px;
    display: flex;
    align-items: center;
`

export const iconClose = (theme: ThemeType) => css`
    flex: 0 0 32px;
    width: 32px;
    padding-left: 12px;
    color: ${getThemeColor(theme, 'Alert.close.color')};
    cursor: pointer;
    position: relative;
    top: 4px;
    transition: all 0.3s;

    &:hover {
        color: ${getThemeColor(theme, 'Alert.close.hover.color')};
    }
`

export const noSeverityBg = (theme: ThemeType) => css`
    background: ${getThemeColor(theme, 'Alert.background')}!important;
`
