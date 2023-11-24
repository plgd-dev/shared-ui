import { css } from '@emotion/react'

import { ThemeType, get } from '../_theme'
import { commonStyles } from '../_utils/commonStyles'

export const referenceItem = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    color: ${get(theme, `FloatingPanel.Icon.color`)};
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        color: ${get(theme, `FloatingPanel.Icon.hover.color`)};
    }
`

export const activeReferenceItem = (theme: ThemeType) => css`
    color: ${get(theme, `FloatingPanel.Icon.hover.color`)};
`

export const floatingPanel = (theme: ThemeType) => css`
    z-index: 10;
    background: ${get(theme, `FloatingPanel.Content.background`)};
    border: 1px solid ${get(theme, `FloatingPanel.Content.borderColor`)};
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    min-width: 400px;
    max-width: 600px;
`

export const header = (theme: ThemeType) => css`
    padding: 16px;
    display: flex;
    height: 56px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${get(theme, `FloatingPanel.Content.Headline.borderColor`)};
`

export const headline = (theme: ThemeType) => css`
    font-family: ${commonStyles.fontSecondary};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.5px;
    color: ${get(theme, `FloatingPanel.Content.Headline.color`)};
`

export const content = css`
    padding: 0 16px;
`
