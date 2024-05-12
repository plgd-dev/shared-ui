import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { fontPrimary } from '../_utils/commonStyles'
import { ThemeType, getThemeColor, getTheme } from '../_theme'

export const copyElement = css`
    position: relative;
    overflow: hidden;
`

export const copy = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${getThemeColor(theme, 'CopyElement.background')};
    border-radius: 4px;
    padding: 0 8px;
    height: 24px;
    box-sizing: border-box;
    color: ${colors.neutral500};
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
        color: ${getThemeColor(theme, 'CopyElement.hover.color')};
    }
`

export const text = (theme: ThemeType) => css`
    display: inline-block;
    padding-left: 4px;
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
`

export const copied = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.green};
    border-radius: 4px;
    padding: 0 8px;
    height: 24px;
    box-sizing: border-box;
    color: ${getThemeColor(theme, 'CopyElement.copied.color')};
    text-decoration: none;
    transform: translateX(100%);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    transition: all 0.3s;

    &:hover {
        text-decoration: none;
        color: ${getThemeColor(theme, 'CopyElement.hover.copied.color')};
    }
`

export const active = css`
    transform: translateX(0);
`
