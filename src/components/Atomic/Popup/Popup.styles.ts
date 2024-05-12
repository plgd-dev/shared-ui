import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { fontPrimary, fontSecondary } from '../_utils/commonStyles'
import { getTheme, ThemeType } from '../_theme'

export const popup = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #f4f9fb;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px;
    overflow: hidden;

    .item-enter-done {
        max-height: 300px;
    }

    .item-exit,
    .item-exit-active,
    .item-exit-done {
        max-height: 0;
    }

    .item-icon-enter-done,
    .item-icon-appear-done {
        opacity: 1;
    }

    .item-icon-exit,
    .item-icon-exit-active,
    .item-icon-exit-done {
        opacity: 0;
    }

    .item-blur-enter-done,
    .item-blur-appear-done {
        filter: blur(6px);
    }

    .item-blur-exit,
    .item-blur-exit-active,
    .item-blur-exit-done {
        filter: blur(0);
    }
`

export const content = css`
    width: 100%;
    min-height: 100%;

    display: flex;
    flex-direction: column;
`

export const doublePanels = css`
    max-width: 704px;
`

export const top = css`
    flex: 1 1 auto;
    padding: 20px 0;
`

export const logo = css`
    display: flex;
    justify-content: center;
    margin-bottom: 48px;
`

export const logoSvg = css`
    transition: all 0.35s;
`

export const boxWrapper = css`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 991px) {
        display: block;
    }
`

export const form = css`
    background: #ffffff;
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 16px;
    padding: 32px;
    flex: 0 0 389px;

    @media (max-width: 991px) {
        max-width: 389px;
        margin: 0 auto;
    }
`

export const h1 = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontSecondary`, fontSecondary)};
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.5px;
    color: #0a2965;
    margin: 0 0 16px 0;
`

export const description = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #252626;
    margin-bottom: 34px;
`

export const formRight = css`
    background: ${colors.primary};
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 32px 32px 128px 32px;
    flex: 0 0 315px;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
    transition: all 0.35s;
    overflow: hidden;

    @media (max-width: 991px) {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 32px;
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
        border-bottom-right-radius: 0;
        z-index: 6;
        cursor: pointer;
    }

    &:before {
        content: '';
        display: none;
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 48px;
        height: 5px;
        background: #fff;
        border-radius: 4px;

        @media (max-width: 991px) {
            display: block;
        }
    }
`

export const headlineRight = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontSecondary`, fontSecondary)};
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: ${colors.neutral100};
    margin: 0;
`

export const textRight = css`
    overflow: hidden;
    transition: all 0.35s;
    position: relative;
    z-index: 2;

    @media (max-width: 991px) {
        max-height: 0;
    }

    @media (min-width: 992px) {
        max-height: 300px !important;
    }
`

export const textRightInner = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    color: ${colors.neutral100};
    padding-top: 16px;
`

export const rightHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
`

export const close = css`
    color: #fff;
    display: none;
    opacity: 0;
    transition: all 0.35s;

    @media (max-width: 991px) {
        display: block;
    }
`

export const rightInner = css`
    position: relative;
`

export const rightPattern = css`
    position: absolute;
    bottom: -128px;
    left: -32px;

    @media (max-width: 991px) {
        top: 0;
        left: -32px;
        right: -32px;
        bottom: unset;
        width: calc(100% + 64px);
        height: auto;
    }
`

export const bottom = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #81868c;
    display: flex;
    justify-content: center;
`

export const pattern = css`
    position: absolute;
    bottom: 0;
    right: 0;
    color: #f4f9fb;
    z-index: -1;
`

export const blur = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    background: rgba(25, 26, 26, 0.9);
    opacity: 0;
    transition: all 0.25s;
`
