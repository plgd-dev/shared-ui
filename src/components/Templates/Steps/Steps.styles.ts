import { css } from '@emotion/react'
import { colors } from '../../Atomic/_utils/colors'
import { getTheme, getThemeColor, ThemeType } from '../../Atomic/_theme'
import { fontPrimary } from '../../Atomic/_utils/commonStyles'

export const steps = css`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const step = (theme: ThemeType) => css`
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${getThemeColor(theme, `Seps.color`)};
    display: flex;
    align-items: center;
`

export const stepDone = (theme: ThemeType) => css`
    color: ${getThemeColor(theme, `Seps.done.color`)};

    .step-label {
        @media (max-width: 767px) {
            display: none;
        }
    }
`

export const stepActive = css`
    color: ${colors.primary};
`

export const stepDisabled = css`
    .step-label {
        @media (max-width: 767px) {
            display: none;
        }
    }
`

export const stepLabel = css`
    margin-left: 8px;
`

export const separator = css`
    flex: 1 1 auto;
    padding: 0 12px;
`

export const separatorLine = (theme: ThemeType) => css`
    position: relative;
    padding: 2px 0 0 0;
    overflow: hidden;

    &:before {
        content: '';
        display: block;
        position: absolute;
        border-top: 4px dashed ${getThemeColor(theme, `Seps.separator.color`)};
        top: -2px;
        bottom: -8px;
        left: -8px;
        right: -8px;
    }
`

export const svg = css`
    circle {
        fill: none;
    }
`
