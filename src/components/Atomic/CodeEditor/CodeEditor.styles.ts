import { css } from '@emotion/react'
import { ThemeType, get } from '../_theme'

export const editor = (theme: ThemeType) => css`
    border: 1px solid ${get(theme, `CodeEditor.borderColor`)};
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    z-index: 2;

    .cm-editor {
        background: transparent;
        transition: all 0.3s;
    }

    .cm-gutters {
        background: ${get(theme, `CodeEditor.gutters.background`)};
        border: 0;
    }

    .cm-lineNumbers .cm-gutterElement {
        color: ${get(theme, `CodeEditor.color`)};
        text-align: center;
        padding: 0 16px 0 16px;
    }

    .cm-gutterElement {
        color: ${get(theme, `CodeEditor.gutters.color`)}!important;
    }

    .cm-content {
        padding: 16px 0;
    }

    .cm-line {
        padding: 0 16px;
        line-height: 1.6;
    }
`

export const wrapper = css`
    position: relative;
`

export const background = (theme: ThemeType) => css`
    .cm-editor {
        background: ${get(theme, `CodeEditor.background`)};
    }
`

export const placeholder = (theme: ThemeType) => css`
    position: absolute;
    border-radius: 8px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${get(theme, `CodeEditor.background`)};
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const flex = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.3s;
    opacity: 1;
`

export const noPlaceholder = css`
    opacity: 0;
`

export const placeholderText = (theme: ThemeType) => css`
    color: ${get(theme, `CodeEditor.placeholder.color`)};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`
