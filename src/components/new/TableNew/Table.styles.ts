import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors } from '../_utils/colors'

export const tableWrapper = css`
    overflow: auto;
`

export const table = css`
    border: 0;
    border-collapse: collapse;
    width: 100%;

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

export const headerItem = css`
    display: flex;
    align-items: center;
    background: #f6f7f9;
    height: 50px;
    padding: 0 8px;

    &:hover {
        ${headerTitle} {
            color: ${colors.neutral800};
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

export const sortActive = css`
    color: ${colors.primaryBonus};
`

export const cell = styled.div`
    height: 54px;
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
        top: 0;
        left: 0;
        right: 0;
        position: absolute;
        background-color: ${colors.neutral200};
    }

    a {
        color: ${colors.neutral800};

        &:hover {
            text-decoration: none;
        }
    }

    .link {
        color: ${colors.primaryBonus};
    }
`

export const firstRowCell = css`
    &:before {
        display: none;
    }
`

export const firstCell = css`
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding-left: 24px;

    &:before {
        left: 7px;
        width: calc(100% - 7px);
    }
`

export const lastCell = css`
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-right: 24px;

    &:before {
        right: 7px;
        width: calc(100% - 7px);
    }
`

export const row = css`
    &:hover {
        ${cell} {
            background-color: ${colors.neutral100};
        }
    }
`

export const isSelected = css`
    ${cell} {
        background-color: ${colors.neutral100};
    }
`
