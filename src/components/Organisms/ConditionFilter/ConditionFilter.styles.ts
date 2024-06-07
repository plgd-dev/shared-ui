import { css } from '@emotion/react'
import { getThemeColor, ThemeType } from '../../Atomic/_theme'
import { fontSecondary } from '../../Atomic/_utils/commonStyles'

export const filter = (theme: ThemeType) => css`
    border-radius: 8px;
    border: 1px solid ${getThemeColor(theme, 'ConditionFilter.border')};
    overflow: hidden;
`

export const header = (theme: ThemeType) => css`
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background: ${getThemeColor(theme, 'ConditionFilter.header.background')};

    &:hover {
        background: ${getThemeColor(theme, 'ConditionFilter.header.hover.background')};

        .expander {
            color: ${getThemeColor(theme, 'ConditionFilter.header.hover.expander.color')};
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
    color: ${getThemeColor(theme, 'ConditionFilter.title.color')};
    display: flex;
    align-items: center;
`

export const left = css`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const right = css`
    flex: 0 0 32px;
`

export const expander = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, 'ConditionFilter.expander.color')};
    background: ${getThemeColor(theme, 'ConditionFilter.expander.background')};
    padding: 6px;
    border-radius: 8px;
    transition: all 0.3s;
    width: 32px;
    height: 32px;

    &:hover {
        color: ${getThemeColor(theme, 'ConditionFilter.expander.hover.color')};
    }
`

export const content = (theme: ThemeType) => css`
    padding: 24px;
    border-top: 1px solid ${getThemeColor(theme, 'ConditionFilter.border')};
`

export const inputBox = (theme: ThemeType) => css`
    padding: 16px 24px 24px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px;
    background: ${getThemeColor(theme, 'ConditionFilter.inputBox.background')};
`

export const list = css`
    padding: 0;
    margin: 0;
    list-style: none;
`

export const listItem = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, 'ConditionFilter.list.item.color')};
`

export const listIcon = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, 'ConditionFilter.list.icon.color')};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: ${getThemeColor(theme, 'ConditionFilter.list.icon.hover.color')};
    }
`
