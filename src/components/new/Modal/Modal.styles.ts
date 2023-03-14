import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { fontPrimary, fontSecondary } from '../_utils/commonStyles'

export const modal = css`
    background: #fff;
    padding: 24px;
    min-width: 600px;
    border-radius: 8px;
`
export const header = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #e6e9ed;
    padding: 12px 0 32px 0;
`

export const headline = css`
    font-family: ${fontSecondary};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.5px;
    color: #0a2965;
`

export const close = css`
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${colors.neutral500};
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.25s;

    span {
        margin-right: 10px;
    }

    &:hover {
        color: ${colors.primary};
    }
`

export const content = css`
    background: #fff;
    padding: 24px 0 0 0;
`

export const footer = css`
    padding: 24px 0 0 0;
    background: #fff;
    display: flex;
    justify-content: flex-end;

    .modal-buttons {
        margin: 0 -8px;

        .modal-button {
            margin: 0 4px;
        }
    }
`
