import { css } from '@emotion/react'
import { getThemeColor, ThemeType } from '../../Atomic/_theme'
import { fontSecondary } from '../../Atomic/_utils/commonStyles'

export const creator = (theme: ThemeType) => css`
    border-radius: 8px;
    border: 1px solid ${getThemeColor(theme, 'ResourceToggleCreator.border')};
    overflow: hidden;
`
export const header = (theme: ThemeType) => css`
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background: ${getThemeColor(theme, 'ResourceToggleCreator.header.background')};

    &:hover {
        background: ${getThemeColor(theme, 'ResourceToggleCreator.header.hover.background')};

        .expander {
            color: ${getThemeColor(theme, 'ResourceToggleCreator.header.hover.expander.color')};
        }
    }
`

const headlineBase = css`
    font: ${fontSecondary};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.5px;
`

export const title = (theme: ThemeType) => css`
    ${headlineBase};
    color: ${getThemeColor(theme, 'ResourceToggleCreator.title.color')};
    display: flex;
    align-items: center;
`

export const right = css`
    flex: 0 0 90px;
    display: flex;
    align-items: center;
`

export const icon = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, 'ResourceToggleCreator.expander.color')};
    background: ${getThemeColor(theme, 'ResourceToggleCreator.expander.background')};
    padding: 6px;
    border-radius: 8px;
    transition: all 0.3s;
    width: 32px;
    height: 32px;

    &:hover {
        color: ${getThemeColor(theme, 'ResourceToggleCreator.expander.hover.color')};
    }
`

export const rightSpacer = (theme: ThemeType) => css`
    width: 1px;
    height: 20px;
    background: ${getThemeColor(theme, 'ResourceToggleCreator.rightSpacer.separator.color')};
    margin: 0 12px;
`

export const content = (theme: ThemeType) => css`
    padding: 16px 24px;
    border-top: 1px solid ${getThemeColor(theme, 'ResourceToggleCreator.border')};
`
