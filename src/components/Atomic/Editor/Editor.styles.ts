import { css } from '@emotion/react'

import { ThemeType, getThemeColor } from '../_theme'

export const editor = (theme: ThemeType) => css`
    position: relative;

    &.disabled:after {
        //display: none;
        background: rgba(255, 255, 255, 0);
    }

    .jsoneditor {
        border: 1px solid ${getThemeColor(theme, `Editor.borderColor`)};
        border-radius: 8px;
        overflow: hidden;

        .ace-jsoneditor {
            .ace_scroller {
                background: ${getThemeColor(theme, `Editor.scroller.background`)};
            }

            .ace_gutter {
                background: ${getThemeColor(theme, `Editor.gutter.background`)};

                .ace_gutter-cell {
                    color: ${getThemeColor(theme, `Editor.gutter.color`)};
                    padding: 0 16px;
                }
            }

            .ace_gutter-active-line {
                background: ${getThemeColor(theme, `Editor.gutterActiveLine.background`)};
            }

            .ace_indent-guide {
                background: none;
            }

            .ace_bracket,
            .ace_punctuation,
            .ace_operator,
            .ace_string,
            .ace_constant,
            .ace_paren,
            .ace_variable {
                color: ${getThemeColor(theme, `Editor.variable.color`)};
            }

            .ace_constant {
                &.ace_boolean {
                    color: ${getThemeColor(theme, `Editor.constant.boolean.color`)};
                }

                &.ace_numeric {
                    color: ${getThemeColor(theme, `Editor.constant.numeric.color`)};
                }
            }

            .ace_string {
                color: ${getThemeColor(theme, `Editor.constant.string.color`)};
            }

            .ace_selection {
                background-color: ${getThemeColor(theme, `Editor.selection.background`)};
            }
        }
    }
`

export const fullSizeBtn = (theme: ThemeType) => css`
    display: flex;
    align-items: center;
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 2;
    background: ${getThemeColor(theme, `Editor.fullSizeBtn.background`)};
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    color: ${getThemeColor(theme, `Editor.fullSizeBtn.color`)};
    transition: all 0.3s;

    &:hover {
        text-decoration: none !important;
        color: ${getThemeColor(theme, `Editor.fullSizeBtn.hover.color`)};
    }
`

export const text = css`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-left: 4px;
`
