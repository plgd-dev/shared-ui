import { css } from '@emotion/react'

export const blackDrop = (zIndex = 1) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(25, 26, 26, 0.9);
    z-index: ${zIndex};
    display: flex;
    align-items: center;
    justify-content: center;
`
