import { css } from '@emotion/react'
import { colors } from '../../_utils/colors'

export const globalFilter = css`
    padding: 16px 0 12px;
    display: flex;
`

export const left = css`
    position: relative;
    display: flex;
    align-items: center;
    flex: 1 1 auto;
`

export const icon = css`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
`

export const searchInput = css`
    border: 0;
    padding: 0 12px 0 26px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral500};
    width: 100%;
    height: 30px;

    &:focus {
        outline: none;
    }
`
