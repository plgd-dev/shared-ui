import { css } from '@emotion/react'
import get from 'lodash/get'
import { ThemeType, get as getTheme } from '../../Atomic/_theme'

export const description = (theme: ThemeType) => css`
    font-family: ${get(theme, `Global.fontPrimary`)};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: ${getTheme(theme, `FullPageWizard.description.color`)};
    margin: 0 0 32px 0;
`

export const descriptionLarge = css`
    margin: 0 0 48px 0;
`

export const subHeadline = (theme: ThemeType) => css`
    font-family: ${get(theme, `Global.fontSecondary`)};
    color: ${getTheme(theme, `FullPageWizard.subHeadline.color`)};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.5px;
    border-top: 1px solid ${getTheme(theme, `FullPageWizard.subHeadline.borderColor`)};
    padding-top: 32px;
    margin: 0 0 4px 0;
`

export const noBorder = css`
    border-top: none;
`

export const headline = (theme: ThemeType) => css`
    font-family: ${get(theme, `Global.fontSecondary`)};
    color: ${getTheme(theme, `FullPageWizard.headline.color`)};
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: -1.5px;
    margin: 0 0 24px 0;
`

export const groupHeadline = (theme: ThemeType) => css`
    font-family: ${get(theme, `Global.fontSecondary`)};
    color: ${getTheme(theme, `FullPageWizard.groupHeadline.color`)};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.5px;
`

export const groupHeadlineMargin = css`
    margin: 32px 0 16px 0;
`

export const flex = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const expander = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${getTheme(theme, `FullPageWizard.expander.color`)};
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: ${getTheme(theme, `FullPageWizard.expander.hover.color`)};
    }
`

export const expanderMargin = css`
    margin-top: 20px;
`
