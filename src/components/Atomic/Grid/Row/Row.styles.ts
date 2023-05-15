import { css } from '@emotion/react'

const GUTTER = '16px'

export const row = css`
    display: flex;
    flex-wrap: wrap;
    margin-left: -${GUTTER};
    margin-right: -${GUTTER};
    box-sizing: border-box;

    & > * {
        padding-left: ${GUTTER};
        padding-right: ${GUTTER};
    }
`

export const noGutters = css`
    margin-right: 0;
    margin-left: 0;

    & > * {
        padding-right: 0;
        padding-left: 0;
    }
`
