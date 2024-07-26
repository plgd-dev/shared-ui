import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { fontPrimary, fontSecondary } from '../_utils/commonStyles'
import { ThemeType, getThemeColor, getTheme } from '../_theme'

export const modalWrapper = css`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
`

export const modal = (theme: ThemeType, minWidth: number | string, maxWidth: number | string, maxHeight: number | string) => css`
    background: ${getThemeColor(theme, `Modal.background`)};
    padding: 24px 0;
    min-width: ${typeof minWidth === 'string' ? minWidth : `${minWidth}px`};
    max-width: ${typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`};
    max-height: ${typeof maxHeight === 'string' ? maxHeight : `${maxHeight}px`};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s;
`

export const header = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${getThemeColor(theme, `Modal.header.borderColor`)};
    padding: 12px 24px 32px 24px;
`

export const headline = (theme: ThemeType, maxWidth?: number) => css`
    font-family: ${getTheme(theme, `Global.fontSecondary`, fontSecondary)};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.5px;
    color: ${getThemeColor(theme, `Modal.header.color`)};
    max-width: ${maxWidth ? `${maxWidth}px` : '100%'};
`

export const subTitle = (theme: ThemeType) => css`
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: ${getThemeColor(theme, `Modal.header.subtitle.color`)};
    padding-top: 4px;
`

export const close = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${colors.neutral500};
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.25s;

    span {
        margin-right: 10px;
    }

    &:hover {
        color: ${getThemeColor(theme, `Modal.close.hover.color`)};
    }
`

export const content = (theme: ThemeType) => css`
    background: ${getThemeColor(theme, `Modal.content.background`)};
    flex: 1 1 auto;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 24px;
    padding-left: 24px;
`

export const contentPadding = css`
    padding-top: 24px;
`

export const footer = (theme: ThemeType) => css`
    padding: 24px 24px 0 24px;
    background: ${getThemeColor(theme, `Modal.footer.background`)};
    display: flex;
    justify-content: flex-end;

    .modal-buttons {
        display: flex;
        align-items: center;
        margin: 0 -8px;

        .modal-button {
            margin: 0 4px;
        }
    }
`

export const fullSizeButtons = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-button {
        width: 100%;
    }
`

export const fullSize = css`
    width: 100%;
    height: 100%;
`
