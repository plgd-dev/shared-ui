import { css } from '@emotion/react'
import { commonStyles, fontPrimary } from '../../../_utils/commonStyles'
import { colors } from '../../../_utils/colors'
import { ThemeType, get } from '../../../_theme'

export const body = css``

export const headline = (theme: ThemeType) => css`
    font-family: ${commonStyles.fontSecondary};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: -0.5px;
    color: ${get(theme, `ShareDeviceModal.headline.color`)};
    margin: 0 0 16px 0;
`

export const alreadyShared = css`
    padding: 32px 0 0 0;
`

export const sharedItem = (theme: ThemeType) => css`
    display: flex;
    padding: 18px 0;
    border-bottom: 1px solid ${get(theme, `ShareDeviceModal.sharedItem.color`)};
`

export const left = css`
    display: flex;
    align-items: center;
    width: 100%;
`

export const right = css`
    width: auto;
`

export const image = css`
    display: flex;
    flex: 0 0 40px;

    img {
        border-radius: 50%;
    }
`

export const data = css`
    padding-left: 8px;
`

export const name = css`
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: ${colors.neutral800};
    white-space: nowrap;
    margin: 0 0 4px 0;
`

export const email = css`
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: ${colors.neutral500};
`

export const removeBtn = (theme: ThemeType) => css`
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${colors.neutral300};
    border-radius: 8px;
    height: 36px;
    padding: 0 12px;
    color: ${colors.neutral900};
    text-decoration: none;
    transition: all 0.25s;

    &:hover {
        color: ${get(theme, `ShareDeviceModal.removeBtn.hover.color`)};
        border-color: ${get(theme, `ShareDeviceModal.removeBtn.hover.borderColor`)};
    }
`
