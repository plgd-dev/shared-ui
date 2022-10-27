import { css } from '@emotion/react'
import { AlignItemsType } from './Swiper.types'

const getAlignItems = (alignItems: AlignItemsType) => {
    switch (alignItems) {
        case 'top':
            return css`
                align-items: flex-start;
            `
        case 'bottom':
            return css`
                align-items: flex-end;
            `
    }
}

export const Swiper = (alignItems: AlignItemsType) => css`
    .swiper {
        padding-bottom: 40px;
    }

    .swiper-wrapper {
        ${getAlignItems(alignItems)};
    }

    .swiper-pagination {
        .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
            background: rgba(255, 255, 255, 0.32);
            margin: 0 6px;
            transition: all 0.25s;
            opacity: 1;

            &:hover {
                background: #febf40;
            }

            &:after {
                content: '';
                display: block;
                width: 16px;
                height: 18px;
                background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNiAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMUMxMS40MTgzIDEgMTUgNC41ODE3MiAxNSA5QzE1IDEzLjQxODMgMTEuNDE4MyAxNyA3IDE3QzQuNjEwNjEgMTcgMi40NjU4OSAxNS45NTI1IDEgMTQuMjkxNiIgc3Ryb2tlPSIjRkVCRjQwIi8+Cjwvc3ZnPgo=');
                position: absolute;
                top: -6px;
                left: -4px;
                opacity: 0;
            }

            &.swiper-pagination-bullet-active {
                background: #febf40;
                position: relative;

                &:after {
                    opacity: 1;
                }
            }
        }
    }
`
