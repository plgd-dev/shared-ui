import { css } from '@emotion/react'
import { colors } from '../../Atomic/_utils/colors'
import { getTheme, ThemeType } from '../../Atomic/_theme'
import { fontPrimary } from '../../Atomic/_utils/commonStyles'

export const actions = css`
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const cta = css`
    margin: 35px -5px -5px -5px;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column-reverse;
    }

    button {
        margin: 5px;
    }
`

export const formSeparator = css`
    position: relative;
    display: flex;
    justify-content: center;
    margin: 55px 0;
`

export const formSeparatorLine = css`
    background: #e6e9ed;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
`

export const formSeparatorText = (theme: ThemeType) => css`
    position: relative;
    z-index: 1;
    background: #fff;
    padding: 0 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: #757676;
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
`

export const formAltLogins = css`
    display: flex;
    margin: -6px;
    flex-wrap: wrap;

    .formAltLogin {
        margin: 6px;
    }
`

export const terms = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #81868c;
    text-align: center;
    padding: 24px 20px 0 20px;
    line-height: 200%;

    a {
        color: ${colors.primary};

        &:hover {
            text-decoration: none;
        }
    }
`
