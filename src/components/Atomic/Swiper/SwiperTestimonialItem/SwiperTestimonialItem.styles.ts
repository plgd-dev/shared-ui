import { css } from '@emotion/react'
import { fontSecondary } from '../../_utils/commonStyles'
import { getTheme, ThemeType } from '../../_theme'

export const testimonialItem = css``

export const testimonialText = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontSecondary`, fontSecondary)};
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    color: #ffffff;
    position: relative;
    padding-bottom: 32px;

    &:before {
        content: '';
        display: block;
        width: 72px;
        height: 56px;
        position: absolute;
        top: -24px;
        left: 0;
        background: url('assets/quotes.svg');
    }
`

export const testimonialAuthor = css`
    display: flex;
`

export const testimonialAuthorImage = css`
    flex: 0 0 48px;
`

export const testimonialAuthorInfo = css`
    padding-left: 12px;
`

export const testimonialAuthorInfoName = css`
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
`

export const testimonialAuthorInfoPosition = css`
    color: rgba(230, 233, 237, 0.6);
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
`
