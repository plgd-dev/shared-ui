import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const popup = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #f4f9fb;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px;
    overflow: hidden;
`

export const content = css`
    width: 100%;
    min-height: 100%;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
`

export const doublePanels = css`
    max-width: 704px;
`

export const top = css`
    flex: 1 1 auto;
    padding: 20px 0;
`

export const logo = css`
    display: flex;
    justify-content: center;
    margin-bottom: 48px;
`

export const boxWrapper = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const form = css`
    background: #ffffff;
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 16px;
    padding: 32px;
    flex: 0 0 389px;
`

export const h1 = css`
    font-family: 'Circular Pro', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.5px;
    color: #0a2965;
    margin: 0 0 16px 0;
`

export const description = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #252626;
    margin-bottom: 34px;
`

export const formRight = css`
    background: ${colors.primary};
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 32px 32px 128px 32px;
    flex: 0 0 315px;
`

export const headlineRight = css`
    font-family: 'Circular Pro', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: ${colors.neutral100};
    margin: 0 0 16px 0;
`

export const textRight = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    color: ${colors.neutral100};
`

export const bottom = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #81868c;
    display: flex;
    justify-content: center;
`

export const pattern = css`
    position: absolute;
    bottom: 0;
    right: 0;
    color: #f4f9fb;
    z-index: 1;
`
