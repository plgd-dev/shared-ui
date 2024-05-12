import { css } from '@emotion/react'
import { colors } from '../../Atomic/_utils/colors'
import { getTheme, ThemeType } from '../../Atomic/_theme'
import { fontPrimary, fontSecondary } from '../../Atomic/_utils/commonStyles'

export const TemplateContainer = css`
    position: relative;
    min-height: 100vh;
    display: flex;
`

export const TemplateLeftCol = css`
    flex: 0 0 495px;
    max-width: 495px;
    background: #1d589f;
    padding: 40px 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;

    @media (max-width: 1199px) {
        flex: 0 0 375px;
        max-width: 375px;
    }

    @media (max-width: 991px) {
        display: none;
    }
`

export const leftCenter = css`
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    z-index: 2;
`

export const leftBottomNode = css`
    position: relative;
    z-index: 2;
`

export const leftBarBg = css`
    position: absolute;
    bottom: 0;
    left: 0;
    right: -42px;
    display: flex;
    z-index: 1;

    @media (max-width: 1199px) {
        right: -32px;
    }

    @media (max-width: 991px) {
        display: none;
    }

    img {
        width: 100%;
    }
`

export const TemplateRightCol = css`
    flex: 1 1 auto;
    background: ${colors.secondary};
    display: flex;
    flex-direction: column;
`

export const rightHeader = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px;
    min-height: 80px;
    box-sizing: border-box;

    @media (max-width: 991px) {
        padding: 20px 15px;
        border-bottom: 1px solid #d7d8da;
    }
`

export const headerSteps = css`
    flex: 0 1 495px;
    padding: 0 15px;
    margin: auto;
    box-sizing: border-box;

    @media (max-width: 1199px) {
        flex: 0 1 375px;
    }

    @media (max-width: 991px) {
        display: none;
    }
`

export const rightMobileLogoLink = css`
    display: none;

    @media (max-width: 991px) {
        display: block;
    }
`

export const close = (theme: ThemeType) => css`
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    color: #81868c;
    text-decoration: none;
    transition: all 0.25s;
    display: flex;
    align-items: center;
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;

    @media (max-width: 991px) {
        right: 15px;
    }

    &:hover {
        color: ${colors.primary};
    }

    .icon {
        display: flex;
        margin-left: 10px;
    }
`

export const rightContent = css`
    position: relative;
    height: calc(100vh - 80px);
    overflow: auto;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

export const centeredBox = css`
    flex: 0 1 495px;
    margin: auto;
    padding: 0 15px;
    position: relative;
    z-index: 2;
    box-sizing: border-box;

    @media (max-width: 1199px) {
        flex: 0 1 375px;
    }

    @media (max-width: 991px) {
        flex: 0 1 495px;
    }
`

export const mainHeadline = (theme: ThemeType) => css`
    margin: 0 0 16px 0;
    font-family: ${getTheme(theme, `Global.fontSecondary`, fontSecondary)};
    color: #191a1a;
    font-weight: 700;
    font-size: 36px;
    line-height: 130%;
    letter-spacing: -0.5px;
`

export const description = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    color: #252626;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    margin-bottom: 30px;

    a {
        color: ${colors.primary};

        &:hover {
            text-decoration: none;
        }
    }
`

const getColorByType = (type: string) => {
    switch (type) {
        case 'info':
            return css`
                color: #0a2965;
                background: rgba(135, 206, 242, 0.2);
            `
        case 'warning':
            return css`
                color: #d69631;
                background: rgba(254, 191, 64, 0.16);
            `
    }
}

export const message = (type: string, theme: ThemeType) => css`
    padding: 10px 16px;
    border-radius: 4px;
    ${getColorByType(type)};
    margin-bottom: 32px;
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`

export const messageText = css`
    margin-left: 8px;
`

export const responsiveSvg = css`
    width: 100%;
    height: auto;
`
