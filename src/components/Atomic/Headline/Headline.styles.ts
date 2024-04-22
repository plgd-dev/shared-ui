import { css } from '@emotion/react'
import { HeadlineType } from './Headline.types'
import { ThemeType, get } from '../_theme'

const getSizes = (type: HeadlineType) => {
    switch (type) {
        case 'h1':
            return css`
                font-size: 72px;
                line-height: 80px;
                letter-spacing: -2px;

                @media (max-width: 767px) {
                    font-size: 50px;
                    line-height: 58px;
                }
            `
        case 'h2':
            return css`
                font-size: 48px;
                line-height: 54px;
                letter-spacing: -1.5px;

                @media (max-width: 767px) {
                    font-size: 36px;
                    line-height: 42px;
                }
            `
        case 'h3':
            return css`
                font-size: 36px;
                line-height: 44px;
                letter-spacing: -0.5px;

                @media (max-width: 767px) {
                    font-size: 24px;
                    line-height: 32px;
                }
            `
        case 'h4':
            return css`
                font-size: 24px;
                line-height: 30px;
                letter-spacing: -0.5px;

                @media (max-width: 767px) {
                    font-size: 20px;
                    line-height: 24px;
                }
            `
        case 'h5':
            return css`
                font-size: 20px;
                line-height: 24px;
                letter-spacing: -0.5px;

                @media (max-width: 767px) {
                    font-size: 18px;
                    line-height: 20px;
                }
            `
    }
}

export const headline = (theme: ThemeType, type: HeadlineType) => css`
    color: ${get(theme, `Headline.color`)};
    font-family: ${get(theme, `Global.fontSecondary`)};
    font-weight: 700;
    font-style: normal;
    ${getSizes(type)};
    margin: 0;
`

export const getProps = (theme: { fontSize?: string; fontStyle?: string; fontWeight?: number; lineHeight?: string }) => css`
    font-size: ${theme.fontSize};
    font-style: ${theme.fontStyle ?? 'normal'};
    font-weight: ${theme.fontWeight};
    line-height: ${theme.lineHeight};
    letter-spacing: -0.5px;
`

export const h6 = (theme: ThemeType) => css`
    ${getProps(get(theme, `Headline.sizes.h6`))};
`
