import { css } from '@emotion/react'
import { ThemeType, get } from '../../Atomic/_theme'

export const list = css`
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`

export const row = (theme: ThemeType) => css`
    display: flex;
    padding: 12px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    box-shadow: ${get(theme, `CaList.item.boxShadow`)};
    transition: all 0.3s;

    &:hover {
        background-color: ${get(theme, `Table.row.background`)};
    }
`

export const largePadding = css`
    padding: 14px 24px;
`

export const name = (theme: ThemeType) => css`
    color: ${get(theme, `CaList.item.color`)};
    overflow: hidden;
    text-overflow: ellipsis;
`
