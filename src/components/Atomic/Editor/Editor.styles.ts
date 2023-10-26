import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import { ThemeType, get } from '../_theme'
import { fontPrimary } from '../_utils/commonStyles'

export const editor = (theme: ThemeType) => css`
    //max-height: 80%;

    &.disabled:after {
        //display: none;
        background: rgba(255, 255, 255, 0);
    }

    .jsoneditor {
        border: 1px solid ${get(theme, `Editor.borderColor`)};
        border-radius: 8px;
        overflow: hidden;

        .ace-jsoneditor {
            .ace_scroller {
                background: ${get(theme, `Editor.scroller.background`)};
            }

            .ace_gutter {
                background: ${get(theme, `Editor.gutter.background`)};
                //             //padding: 16px 0;
                //
                .ace_gutter-cell {
                    //font-family: 'Poppins', sans-serif;
                    //font-style: normal;
                    //font-weight: 400;
                    //font-size: 14px;
                    //                 //line-height: 22px;
                    //                 text-align: center;
                    color: ${colors.neutral600};
                    padding: 0 16px;
                    //                 display: flex;
                    //                 align-items: center;
                }
            }

            .ace_gutter-active-line {
                background: ${get(theme, `Editor.gutterActiveLine.background`)};
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
                color: ${colors.neutral600};
            }

            .ace_constant {
                &.ace_boolean {
                    color: ${colors.yellow};
                }

                &.ace_numeric {
                    color: ${colors.red};
                }
            }

            .ace_string {
                color: ${colors.green};
            }
        }
    }
`

export const fullSizeBtn = (theme: ThemeType) => css`
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 2;
    background: ${get(theme, `Editor.fullSizeBtn.background`)};
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    color: #81868c;
    transition: all 0.3s;

    &:hover {
        text-decoration: none !important;
        color: ${get(theme, `Editor.hover.color`)};
    }
`

export const text = css`
    font-family: ${fontPrimary};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-left: 4px;
`
