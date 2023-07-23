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

    .shake {
        animation: bellshake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        backface-visibility: hidden;
        transform-origin: top right;
    }

    @keyframes bellshake {
        0% {
            transform: rotate(0);
        }
        15% {
            transform: rotate(5deg);
        }
        30% {
            transform: rotate(-5deg);
        }
        45% {
            transform: rotate(4deg);
        }
        60% {
            transform: rotate(-4deg);
        }
        75% {
            transform: rotate(2deg);
        }
        85% {
            transform: rotate(-2deg);
        }
        92% {
            transform: rotate(1deg);
        }
        100% {
            transform: rotate(0);
        }
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
        z-index: 2;
    }
`