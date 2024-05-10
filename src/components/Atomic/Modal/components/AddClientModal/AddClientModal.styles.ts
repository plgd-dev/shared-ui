import { css } from '@emotion/react'
import { fontPrimary, fontSecondary } from '../../../_utils/commonStyles'
import { colors } from '../../../_utils/colors'
import { get, ThemeType } from '../../../_theme'

export const getCodeBox = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: ${get(theme, `AddClientModal.box.color`)};
    border-radius: 8px;
`

export const codeBoxWithLines = css`
    flex-direction: column;
    padding: 8px 24px;
`

export const codeInfoHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 16px 0;
`

export const title = css`
    font-family: ${fontSecondary};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: -0.5px;
    color: ${colors.primaryDarken};
    margin: 0;
`

export const line = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex: 1 1 auto;
    height: 54px;
    border-bottom: 1px solid ${colors.neutral200};

    &:last-child {
        border-bottom: 0;
    }
`

export const attribute = css`
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral500};
    flex: 0 0 170px;
    text-align: left;
`

export const value = css`
    font-family: ${fontSecondary};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: right;
    color: ${colors.neutral800};
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const icon = css`
    margin-left: 8px;
    color: ${colors.neutral500};
    flex: 0 0 16px;
    cursor: pointer;
`
