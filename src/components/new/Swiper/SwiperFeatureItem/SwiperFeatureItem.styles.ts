import { css } from '@emotion/react'

export const featureItem = css`
    position: relative;
`

export const featureName = css`
    text-align: center;
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    padding-top: 24px;
`

export const featureDescription = css`
    color: #e6e9ed;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 10px;
    padding: 12px 10px 0 10px;

    @media (max-width: 991px) {
        padding: 12px 0 0 0;
    }
`

export const featureImage = css`
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
`
