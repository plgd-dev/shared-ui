import { css } from '@emotion/react'
import { ThemeType, get } from '../_theme'

export const editor = (theme: ThemeType) => css`
    border: 1px solid ${get(theme, `Editor.borderColor`)};
    border-radius: 8px;
    overflow: hidden;

    .cm-gutters {
        background: #e6e9ed;
        border: 0;
    }

    .cm-lineNumbers .cm-gutterElement {
        color: #757676;
        text-align: center;
        padding: 0 16px 0 16px;
    }

    .cm-content {
        padding: 16px 0;
    }

    .cm-line {
        padding: 0 16px;
        line-height: 1.6;
    }
`
