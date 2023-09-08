import { css } from '@emotion/react'
import { colors } from '../../_utils/colors'

export const actionItems = css`
    display: flex;
    margin: 0 -10px;
    align-items: center;
`

export const actionItem = css`
    padding: 0 10px;
`

export const icon = css`
    cursor: pointer;
    color: ${colors.neutral500};
    transition: all 0.25s;

    &:hover {
        color: ${colors.primary};
    }
`
