import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { fontPrimary } from '../_utils/commonStyles'

export const dropzoneContainer = css`
    padding: 32px;
    border: 1px dashed ${colors.neutral300};
    border-radius: 8px;
`

export const placeholder = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${colors.neutral500};
`

export const placeholderText = css`
    font-family: ${fontPrimary};
    color: ${colors.neutral800};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin: 12px 0 0 0;

    span {
        color: ${colors.primary};
        text-decoration: underline;
        cursor: pointer;
    }
`

export const placeholderDescription = css`
    font-family: ${fontPrimary};
    color: ${colors.neutral500};
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin: 4px 0 0 0;
`

export const imageRow = css`
    display: flex;
`

export const imageWrapper = css`
    flex: 0 0 40px;
`

export const contentWrapper = css`
    flex: 1 1 auto;
`

export const image = css`
    display: block;
    width: 100%;
    height: auto;
`

export const fileLine = css`
    display: flex;
    justify-content: space-between;
    flex: 1 1 auto;
    padding-left: 12px;
`

export const fileName = css`
    font-family: ${fontPrimary};
    color: ${colors.neutral800};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`

export const closeIcon = css`
    cursor: pointer;
    color: ${colors.neutral500};
`

export const fileSize = css`
    font-family: ${fontPrimary};
    color: ${colors.neutral500};
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
`
