import { css } from '@emotion/react'
import { fontPrimary, hexToRgbA } from '../../../_utils/commonStyles'
import { colors } from '../../../_utils/colors'
import { ThemeType, get } from '../../../_theme'

export const item = css`
    display: flex;
    padding: 16px 0;
`

export const borderTop = css`
    border-top: 1px solid #e6e9ed;
`

export const iconWrapper = css`
    flex: 0 0 40px;
    position: relative;
`

export const unreadMark = (theme: ThemeType) => css`
    position: absolute;
    width: 11px;
    height: 11px;
    left: 0;
    top: 0;
    background: ${colors.red};
    border: 2px solid ${get(theme, `NotificationCenter.InnerToast.unreadMark.borderColor`)};
    border-radius: 50%;
    box-sizing: border-box;
`

export const contentWrapper = css`
    flex: 1 1 auto;
    padding-left: 12px;
`

export const iconOverlay = css`
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 50%;
`

export const colorInfo = css`
    color: ${colors.primary};
`

export const colorInfoBg = css`
    background-color: ${hexToRgbA(colors.primary, 0.16)};
`

export const colorSuccess = css`
    color: ${colors.green};
`

export const colorSuccessBg = css`
    background-color: ${hexToRgbA(colors.green, 0.16)};
`

export const colorWarning = css`
    color: ${colors.yellow};
`

export const colorWarningBg = css`
    background-color: ${hexToRgbA(colors.yellow, 0.16)};
`

export const colorError = css`
    color: ${colors.red};
`

export const colorErrorBg = css`
    background-color: ${hexToRgbA(colors.red, 0.16)};
`

export const headline = css`
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.primaryDarken};
    margin: 0;
`

export const description = css`
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral500};
`
