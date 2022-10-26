import { css } from '@emotion/react'
import { colors } from '../../_utils/colors'

export const cover = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 40px;
    overflow: hidden;
`

export const container = css`
    max-width: 1200px;
    margin: 0 auto;
`

export const rectangle = css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 4;
`

export const background = css`
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    filter: blur(6px);
`

export const blur = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: rgba(25, 26, 26, 0.9);
`

export const man = css`
    position: fixed;
    top: 50px;
    right: 200px;
    z-index: 5;
`

export const main = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 40px;
    z-index: 6;
`

export const content = css`
    padding: 100px 0 0 100px;
    max-width: 500px;
`

export const headline = css`
    color: #0a2965;
    font-family: 'Circular Pro', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 54px;
    letter-spacing: -1.5px;
    margin: 0 0 16px 0;

    span {
        color: #007bbf;
    }
`

export const description = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.neutral800};
    margin-bottom: 34px;
`