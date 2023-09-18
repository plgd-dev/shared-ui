import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { fontPrimary, fontSecondary } from '../_utils/commonStyles'
import { ThemeType, get } from '../_theme'

export const modalWrapper = css`
    display: flex;
    justify-content: center;
`

export const modal = (theme: ThemeType, minWidth: number | string, maxWidth: number | string) => css`
    background: ${get(theme, `Modal.background`)};
    padding: 24px;
    min-width: ${typeof minWidth === 'string' ? minWidth : `${minWidth}px`};
    max-width: ${typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`};
    border-radius: 8px;
`
export const header = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${get(theme, `Modal.header.background`)};
    padding: 12px 0 32px 0;
`

export const headline = (theme: ThemeType, maxWidth?: number) => css`
    font-family: ${fontSecondary};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.5px;
    color: ${get(theme, `Modal.header.color`)};
    max-width: ${maxWidth ? `${maxWidth}px` : '100%'};
`

export const close = (theme: ThemeType) => css`
    font-family: ${fontPrimary};
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
        color: ${get(theme, `Modal.close.hover.color`)};
    }
`

export const content = (theme: ThemeType) => css`
    background: ${get(theme, `Modal.content.background`)};
`

export const contentPadding = css`
    padding: 24px 0 0 0;
`
export const footer = (theme: ThemeType) => css`
    padding: 24px 0 0 0;
    background: ${get(theme, `Modal.footer.background`)};
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
