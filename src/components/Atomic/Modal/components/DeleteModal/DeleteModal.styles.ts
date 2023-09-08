import { css } from '@emotion/react'
import { fontPrimary, fontSecondary, hexToRgbA } from '../../../_utils/commonStyles'
import { colors } from '../../../_utils/colors'

export const header = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
`

export const deleteIcon = css`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${hexToRgbA(colors.red, 0.1)};
    margin-top: -84px;
`

export const deleteIconInner = css`
    flex: 0 0 86px;
    width: 86px;
    height: 86px;
    background: ${colors.red};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow: 0 6px 12px rgba(215, 78, 58, 0.32);
`

export const title = (maxWidth?: number) => css`
    font-family: ${fontSecondary};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    letter-spacing: -0.5px;
    color: ${colors.primaryDarken};
    margin: 16px 0 8px 0;
    max-width: ${maxWidth ? `${maxWidth}px` : '100%'};
`

export const subTitle = css`
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral800};
    text-align: center;
`

export const body = css`
    background: #000028;
    margin-top: 8px;
    border-radius: 8px;
    padding: 8px 24px;
`

export const item = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    border-bottom: 1px solid ${colors.neutral200};

    &:last-child {
        border-bottom: 0;
    }
`

export const attr = css`
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral500};
`

export const val = css`
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: right;
    color: ${colors.neutral500};
`

export const emptyDeleteInformation = css`
    height: 2px;
    width: 100%;
    background: ${colors.neutral200};
`
