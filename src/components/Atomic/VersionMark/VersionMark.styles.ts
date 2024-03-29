import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { ThemeType, get } from '../_theme'

export const versionMark = css`
    display: flex;
    align-items: center;
`

export const left = css`
    flex: 0 0 24px;
`

export const right = css`
    flex: 1 1 auto;
    padding-left: 12px;
`

export const versionText = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: ${colors.neutral500};
`

export const updateText = (theme: ThemeType) => css`
    color: ${get(theme, `VersionMark.link.color`)};
    text-decoration: underline;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    padding-left: 6px;
    cursor: pointer;

    &:hover {
        text-decoration: none;
    }
`
