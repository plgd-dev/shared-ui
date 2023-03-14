import { css } from '@emotion/react'
import { colors } from '../../../_utils/colors'

export const userWidget = css`
    padding-left: 12px;
    display: flex;
`

export const name = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: #0a2965;
`

export const description = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.neutral500};
    opacity: 0.8;
`

export const image = css`
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    margin-right: 12px;

    img {
        border-radius: 50%;
        width: 100%;
        height: auto;
    }
`
