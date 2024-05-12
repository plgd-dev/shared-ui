import { css } from '@emotion/react'
import { colors } from '../../Atomic/_utils/colors'
import { fontPrimary } from '../../Atomic/_utils/commonStyles'
import { ThemeType, getThemeColor, getTheme } from '../../Atomic/_theme'

export const footer = (theme: ThemeType) => css`
    border-top: 1px solid ${getThemeColor(theme, `Footer.borderTop`)};
    background: ${getThemeColor(theme, `Footer.background`)};
    padding: 0 40px;
    box-sizing: border-box;
    flex-shrink: 0;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export const footerInner = css`
    flex: 0 0 420px;
`

export const footerMainLine = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 40px;
    min-height: 64px;
    margin: 0 -40px;
    background-color: ${getThemeColor(theme, `Footer.footerMainLine.background`)};
`

export const recentTasks = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: ${getThemeColor(theme, `Footer.recentTasks.color`)};
    text-decoration: none;
    display: flex;
    align-items: center;
    padding-right: 22px;
    position: relative;
    transition: all 0.25s;

    &:hover {
        color: ${getThemeColor(theme, `Footer.recentTasks.hover.color`)};
    }
`

export const icon = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    color: ${colors.neutral500};
    transition: all 0.3s;
`

export const panelOpen = css`
    transform: translateY(-50%) rotate(180deg);
`
