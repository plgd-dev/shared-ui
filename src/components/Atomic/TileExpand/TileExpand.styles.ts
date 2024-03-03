import { css } from '@emotion/react'

import { ThemeType, get } from '../_theme'
import { fontPrimary, fontSecondary } from '../_utils/commonStyles'

export const tileExpand = (theme: ThemeType) => css`
    border-radius: 8px;
    border: 1px solid ${get(theme, 'TileExpand.border')};
    overflow: hidden;
`

export const header = (theme: ThemeType) => css`
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background: ${get(theme, 'TileExpand.header.background')};

    &:hover {
        background: ${get(theme, 'TileExpand.header.hover.background')};

        .expander {
            color: ${get(theme, 'TileExpand.header.hover.expander.color')};
        }
    }
`

export const left = css``

export const tagSpace = css`
    padding-left: 6px;
`

const headlineBase = css`
    font: ${fontSecondary};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.5px;
`

export const title = (theme: ThemeType) => css`
    ${headlineBase};
    color: ${get(theme, 'TileExpand.title.color')};
    display: flex;
    align-items: center;
`

export const time = (theme: ThemeType) => css`
    font: ${fontPrimary};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: ${get(theme, 'TileExpand.time.color')};
    padding-top: 2px;
`

export const right = css`
    flex: 0 0 32px;
`

export const expander = (theme: ThemeType) => css`
    color: ${get(theme, 'TileExpand.expander.color')};
    background: ${get(theme, 'TileExpand.expander.background')};
    padding: 6px;
    border-radius: 8px;
    transition: all 0.3s;
    width: 32px;
    height: 32px;

    &:hover {
        color: ${get(theme, 'TileExpand.expander.hover.color')};
    }
`

export const content = (theme: ThemeType) => css`
    padding: 0 24px 24px 24px;
    border-top: 1px solid ${get(theme, 'TileExpand.border')};
`

export const group = css`
    padding-top: 16px;
`

export const groupHeadline = (theme: ThemeType) => css`
    ${headlineBase};
    color: ${get(theme, 'TileExpand.title.color')};
    display: flex;
    align-items: center;
    padding-bottom: 16px;
`

export const error = (theme: ThemeType) => css`
    padding: 12px;
    border-radius: 8px;
    background: ${get(theme, 'TileExpand.error.background')};
`

export const errorTitle = (theme: ThemeType) => css`
    font-family: ${fontPrimary};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    color: ${get(theme, 'TileExpand.error.title.color')};
    margin-bottom: 6px;
`

export const errorMessage = (theme: ThemeType) => css`
    font-family: ${fontPrimary};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    color: ${get(theme, 'TileExpand.error.message.color')};
`

export const infoLine = (theme: ThemeType) => css`
    padding: 16px;
    border-radius: 8px;
    background: ${get(theme, 'TileExpand.info.background')};
    font-family: ${fontPrimary};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;

    & + & {
        margin-top: 4px;
    }
`

export const attribute = (theme: ThemeType) => css`
    color: ${get(theme, 'TileExpand.info.attribute.color')};
`

export const value = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    color: ${get(theme, 'TileExpand.info.value.color')};
    justify-content: flex-end;
`

export const valueRaw = (theme: ThemeType) => css`
    color: ${get(theme, 'TileExpand.info.value.color')};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    text-align: right;
`

export const icon = (theme: ThemeType) => css`
    margin-left: 6px;
    color: ${get(theme, 'TileExpand.info.value.icon.color')};
    cursor: pointer;

    &:hover {
        color: ${get(theme, 'TileExpand.info.value.icon.hover.color')};
    }
`
