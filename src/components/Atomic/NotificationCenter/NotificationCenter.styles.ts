import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { commonStyles, fontPrimary } from '../_utils/commonStyles'

export const floatingPanel = css`
    z-index: 10;
    background: #000028;
    border: 1px solid #23233c;
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    min-width: 400px;
`

export const header = css`
    padding: 16px;
    display: flex;
    height: 56px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e9ed;
`

export const headline = css`
    font-family: ${commonStyles.fontSecondary};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.5px;
    color: ${colors.primaryDarken};
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

export const content = css`
    overflow: auto;
    max-height: 400px;
    padding: 0 16px;
`

export const noNotifications = css`
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral500};
`
