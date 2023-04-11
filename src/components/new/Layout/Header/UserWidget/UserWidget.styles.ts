import { css } from '@emotion/react'
import { colors } from '../../../_utils/colors'

export const widgetReference = css`
    display: flex;
    align-items: stretch;
`

export const userWidget = css`
    padding-left: 12px;
    display: flex;
`

export const clickable = css`
    cursor: pointer;
`

export const widgetArrow = css`
    padding-left: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const icon = css`
    transition: all 0.3s;
`

export const iconActive = css`
    transform: rotate(180deg);
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

export const floatingMenu = css`
    z-index: 10;
    background: #fff;
    border: 1px solid #e6e9ed;
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    padding: 10px 20px;
`

export const item = css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${colors.neutral500};
    transition: all 0.3s;
    margin: 6px 0;
    padding: 4px 0;
    cursor: pointer;

    &:hover {
        color: ${colors.primary};
    }
`
