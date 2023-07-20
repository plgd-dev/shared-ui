import { css } from '@emotion/react'
import { ColumnSizesType, ColumnSizeType } from './Column.types'

const comparePropName = (props: ColumnSizesType, name: string) =>
    props.size === name || props.sm === name || props.md === name || props.lg === name || props.lg === name

const getColEqual = css`
    flex: 1 0 0;
    min-width: 0;
`

const getColAuto = css`
    flex: 0 0 auto;
    width: auto;
`

const getColSize = (col: ColumnSizeType) => {
    if (col === 'auto') {
        return getColAuto
    }
    if (col === 'equal') {
        return getColEqual
    }

    let size: string | number = (col / 12) * 100

    return css`
        flex: 0 0 auto;
        width: ${size}%;
    `
}

export const column = (props: ColumnSizesType) => css`
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    position: relative;
    box-sizing: border-box;

    // size
    ${comparePropName(props, 'equal') && getColEqual};
    ${comparePropName(props, 'auto') && getColAuto};

    ${props.size && getColSize(props.size)};

    @media (min-width: 576px) {
        ${props.sm && getColSize(props.sm)};
    }

    @media (min-width: 768px) {
        ${props.md && getColSize(props.md)};
    }

    @media (min-width: 992px) {
        ${props.lg && getColSize(props.lg)};
    }

    @media (min-width: 1200px) {
        ${props.xl && getColSize(props.xl)};
    }
`
