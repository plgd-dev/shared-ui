import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const treeComponent = css`
    height: calc(100% - 32px); // switch view button
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: hidden;
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

export const row = css`
    .tree-custom-tag {
        transition: all 0.3s;
    }

    &:hover {
        .tree-custom-tag {
            background: #ccc;
        }
    }
`

export const treeCell = css`
    .link {
        color: ${colors.primary};
    }
`

export const removeBottomBorderRadius = css`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: #23233c;

    .tree-custom-tag {
        background: #fff;
    }
`

export const removeTopBorderRadius = css`
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: #23233c;

    .tree-custom-tag {
        background: #fff;
    }
`

export const removeBorderRadius = css`
    border-radius: 0;
    background-color: #23233c;

    .tree-custom-tag {
        background: #fff;
    }
`

export const depthLeftBorder = (depth = 0) => {
    let offset = 7

    if (depth > 0) {
        offset = (depth + 1) * 24
    }

    return css`
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        padding-left: 24px;

        &:before {
            left: ${offset}px;
            width: calc(100% - ${offset}px);
        }
    `
}

export const depthRightBorder = (depth = 0) => {
    let offset = depth === 0 ? 7 : 24

    return css`
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        padding-right: 24px;
        justify-content: end;

        &:before {
            right: ${offset}px;
            width: calc(100% - ${offset}px);
        }
    `
}

export const expanderWrapper = css`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
`

export const drawExpandLine = (desc: number, rowHeight: number, depth = 0) => {
    const top = (rowHeight - 22) / 2
    const left = depth * 24 + 3
    const height = rowHeight * desc - top

    return css`
        &:before {
            display: block;
            content: '';
            position: absolute;
            top: calc(100% - ${top}px);
            left: ${left}px;
            background: ${colors.neutral300};
            //background: red;
            width: 1px;
            z-index: 199;
            height: ${height}px;
        }
    `
}

export const icoSubLine = (depth: number) => {
    const left = (depth - 1) * 24 + 3
    return css`
        position: absolute;
        left: ${left}px;
        top: 0;
    `
}
