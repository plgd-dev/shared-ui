import { css } from '@emotion/react'
import { colors } from '../../_utils/colors'
import { ThemeType, get } from '../../_theme'

export const strippedLine = (theme: ThemeType) => css`
    padding: 16px 0;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${get(theme, `ModalStrippedLine.strippedLine.borderColor`)};
`

export const smallPadding = css`
    padding: 9px 0;
`

export const label = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral500};
`

export const component = (theme: ThemeType) => css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: right;
    color: ${get(theme, `ModalStrippedLine.value.color`)};
`
