import { css } from '@emotion/react'
import { ThemeType, get } from '../../../_theme'
import { fontSecondary, hexToRgbA } from '../../../_utils/commonStyles'

export const header = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
`

export const infoIcon = (theme: ThemeType) => css`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${hexToRgbA(get(theme, `Prompt.icon.background`), 0.2)};
    margin-top: -84px;
`

export const infoIconInner = (theme: ThemeType) => css`
    flex: 0 0 86px;
    width: 86px;
    height: 86px;
    background: ${get(theme, 'Prompt.icon.background')};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${get(theme, 'Prompt.icon.color')};
    box-shadow: 0 6px 12px rgba(215, 78, 58, 0.32);
`

export const title = (theme: ThemeType, maxWidth?: number) => css`
    font-family: ${fontSecondary};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    letter-spacing: -0.5px;
    color: ${get(theme, 'DeleteModal.title.color')};
    margin: 16px 0 8px 0;
    max-width: ${maxWidth ? `${maxWidth}px` : '100%'};
`

export const text = (theme: ThemeType) => css`
    max-width: 350px;
    text-align: center;
    margin: 8px auto 0 auto;
    color: ${get(theme, `Prompt.text.color`)};
    border-bottom: 2px solid ${get(theme, `Prompt.text.borderColor`)};
    padding-bottom: 32px;
`
