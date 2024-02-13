import { css } from '@emotion/react'
import { ThemeType, get } from '../_theme'

export const dropzoneContainer = (theme: ThemeType) => css`
    padding: 32px;
    border: 1px dashed ${get(theme, `Dropzone.container.borderColor`)};
    border-radius: 8px;
`

export const smallPadding = css`
    padding: 16px;
`

export const placeholder = (theme: ThemeType) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${get(theme, `Dropzone.placeholder.color`)};
`

export const placeholderText = (theme: ThemeType) => css`
    color: ${get(theme, `Dropzone.placeholder.text.color`)};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin: 12px 0 0 0;

    span {
        color: ${get(theme, `Dropzone.placeholder.highlight.color`)};
        text-decoration: underline;
        cursor: pointer;
    }
`

export const placeholderDescription = (theme: ThemeType) => css`
    color: ${get(theme, `Dropzone.placeholder.description.color`)};
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin: 4px 0 0 0;
`

export const imageRow = css`
    display: flex;
`

export const imageWrapper = css`
    flex: 0 0 40px;
`

export const contentWrapper = css`
    flex: 1 1 auto;
`

export const image = css`
    display: block;
    width: 100%;
    height: auto;
`

export const fileLine = css`
    display: flex;
    justify-content: space-between;
    flex: 1 1 auto;
    padding-left: 12px;
`

export const fileName = (theme: ThemeType) => css`
    color: ${get(theme, `Dropzone.file.color`)};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`

export const closeIcon = (theme: ThemeType) => css`
    cursor: pointer;
    color: ${get(theme, `Dropzone.file.close.color`)};
`

export const fileSize = (theme: ThemeType) => css`
    color: ${get(theme, `Dropzone.file.size.color`)};
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
`

export const progressBar = (theme: ThemeType) => css`
    margin-top: 8px;
    background: ${get(theme, `Dropzone.file.progressBar.background`)};
    height: 4px;
    border-radius: 52px;
`
