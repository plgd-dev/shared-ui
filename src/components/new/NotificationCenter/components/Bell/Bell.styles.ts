import { css } from '@emotion/react'
import { colors } from '../../../_utils/colors'

export const bell = css`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    position: relative;
    color: ${colors.neutral500};
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: ${colors.primaryBonus};
    }
`

export const hasUnRead = css`
    &:before {
        content: '';
        display: block;
        box-sizing: border-box;
        border: 2px solid #fff;
        background: ${colors.red};
        border-radius: 50%;
        position: absolute;
        top: 10px;
        right: 10px;
        width: 11px;
        height: 11px;
    }
`
