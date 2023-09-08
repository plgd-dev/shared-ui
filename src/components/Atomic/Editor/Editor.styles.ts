import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const editor = css`
    &.disabled:after {
        //display: none;
        background: rgba(255, 255, 255, 0);
    }
    .jsoneditor {
        border: 1px solid #000028;
        border-radius: 8px;
        overflow: hidden;

        .ace-jsoneditor {
            .ace_scroller {
                background: #000028;
            }
            .ace_gutter {
                background: #000028;
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
                background: #000028;
            }

            .ace_bracket,
            .ace_punctuation,
            .ace_operator,
            .ace_string,
            .ace_constant,
            .ace_paren,
            .ace_variable {
                //font-family: 'Poppins', sans-serif;
                //font-style: normal;
                //font-weight: 400;
                //             font-size: 14px;
                //             //line-height: 22px;
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
