import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { commonStyles } from '../_utils/commonStyles'

export const floatingPanel = css`
    z-index: 10;
    background: #fff;
    border: 1px solid #e6e9ed;
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    min-width: 400px;
`

export const header = css`
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const headline = css`
    font-family: ${commonStyles.fontSecondary};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.5px;
`

export const clearAll = css`
    font-family: ${commonStyles.fontPrimary};
    font-style: normal;
    color: ${colors.primary};
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-decoration: underline;

    &:hover {
        text-decoration: none;
    }
`

export const content = css``

export const item = css``
