import { css } from '@emotion/react'
import { fontPrimary, fontSecondary } from '../../../_utils/commonStyles'
import { colors } from '../../../_utils/colors'
import { ThemeType, getThemeColor, getTheme } from '../../../_theme'

export const getCodeBox = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: ${getThemeColor(theme, `ProvisionDeviceModal.getCodeBox.background`)};
    border-radius: 8px;
`

export const codeBoxWithLines = css`
    flex-direction: column;
    padding: 8px 24px;
`

export const codeInfoHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 16px 0;
`

export const title = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontSecondary`, fontSecondary)};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: -0.5px;
    color: ${getThemeColor(theme, `ProvisionDeviceModal.title.color`)};
    margin: 0;
`

export const line = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex: 1 1 auto;
    height: 54px;
    border-bottom: 1px solid ${getTheme(theme, `colorPalette.neutral200`, colors.neutral200)};

    &:last-child {
        border-bottom: 0;
    }
`

export const attribute = (theme: ThemeType) => css`
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${getTheme(theme, `colorPalette.neutral500`, colors.neutral500)};
    flex: 0 0 170px;
    text-align: left;
`

export const value = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontSecondary`, fontSecondary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: right;
    color: ${getThemeColor(theme, 'ProvisionDeviceModal.value.color')};
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const icon = (theme: ThemeType) => css`
    margin-left: 8px;
    color: ${getTheme(theme, `colorPalette.neutral500`, colors.neutral500)};
    flex: 0 0 16px;
    cursor: pointer;
`

export const alert = css`
    margin-bottom: 24px;
`

export const alertTopSpace = css`
    margin-top: 16px;
`
