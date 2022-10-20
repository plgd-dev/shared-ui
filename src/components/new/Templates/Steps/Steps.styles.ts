import { css } from '@emotion/react'
import { colors } from '../../_utils/colors'

export const steps = css`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const step = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #d7d8da;
    display: flex;
    align-items: center;
`

export const stepDone = css`
    color: #81868c;

    .step-label {
        @media (max-width: 767px) {
            display: none;
        }
    }
`

export const stepActive = css`
    color: ${colors.primary};
`

export const stepDisabled = css`
    .step-label {
        @media (max-width: 767px) {
            display: none;
        }
    }
`

export const stepLabel = css`
    margin-left: 8px;
`

export const separator = css`
    flex: 1 1 auto;
    padding: 0 12px;
`

export const separatorLine = css`
    position: relative;
    padding: 2px 0 0 0;
    overflow: hidden;

    &:before {
        content: '';
        display: block;
        position: absolute;
        border-top: 4px dashed #e6e9ed;
        top: -2px;
        bottom: -8px;
        left: -8px;
        right: -8px;
    }
`

export const svg = css`
    circle {
        fill: none;
    }
`
