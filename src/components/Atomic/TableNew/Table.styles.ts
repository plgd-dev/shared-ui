import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors } from '../_utils/colors'
import { ThemeType, get } from '../_theme'

export const tableComponent = css`
    //height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: hidden;
`

export const tableWrapper = css`
    overflow: auto;
    height: 100%;
`

export const table = css`
    border: 0;
    border-collapse: collapse;
    width: 100%;
    overflow: hidden;

    th,
    td,
    tr {
        padding: 0;
    }

    .actions {
        & > div {
            justify-content: flex-end;
        }
    }
`

export const headerTh = css`
    vertical-align: top;
    height: 62px;
`

export const headerTitle = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.neutral500};
    transition: all 0.25s;
    white-space: nowrap;
`

export const headerItem = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    background: ${get(theme, `Table.headerItem.background`)};
    height: 50px;
    padding: 0 8px;

    &:hover {
        ${headerTitle} {
            color: ${get(theme, `Table.headerItem.hover.color`)};
        }
    }
`

export const headerItemFirst = css`
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding-left: 24px;
`

export const headerItemLast = css`
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-right: 24px;
`

export const sortArrows = css`
    display: flex;
    flex-direction: column;
    margin-left: 4px;
`

export const sortArrow = css`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    color: ${colors.neutral500};
`

export const sortActive = (theme: ThemeType) => css`
    color: ${get(theme, `Table.sortActive.color`)};
`

const getRowHeight = (props: { rowHeight: number }) => css`
    height: ${props.rowHeight}px;
`

export const cell = styled.div`
    ${getRowHeight};
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 8px;
    transition: all 0.25s;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral500};

    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        transition: all 0.25s;
        background-color: ${(props) => get(props.theme, `Table.cell.before.background`)};
    }

    a {
        color: ${(props) => get(props.theme, `Table.cell.a.color`)};

        &:hover {
            text-decoration: none;
        }
    }

    .link {
        color: ${(props) => get(props.theme, `Table.cell.link.color`)};
    }
`

export const firstRowCell = css`
    &:before {
        //display: none;
    }
`

export const firstCell = css`
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding-left: 24px;

    &:before {
        left: 8px;
        width: calc(100% - 8px);
    }
`

export const lastCell = css`
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-right: 24px;

    &:before {
        right: 8px;
        width: calc(100% - 8px);
    }
`

// @ts-ignore
export const row = (theme: ThemeType) => css`
    &:hover {
        ${cell} {
            background-color: ${get(theme, `Table.row.background`)};

            &:before {
                background-color: ${get(theme, `Table.row.selected.cell.before.background`)};
            }
        }
    }
`

// @ts-ignore
export const isSelected = (theme: ThemeType) => css`
    ${cell} {
        background-color: ${get(theme, `Table.selected.background`)};

        &:before {
            background-color: ${get(theme, `Table.row.selected.cell.before.background`)};
        }
    }
`
