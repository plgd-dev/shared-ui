import { css } from '@emotion/react'
import { HeadlineType } from './DetailHeadline.types'
import { ThemeType, get } from '../../Atomic/_theme'

const getSizes = (type: HeadlineType) => {
    switch (type) {
        case 'h4':
            return css`
                font-size: 14px;
                line-height: 16px;
            `
    }
}

export const headline = (theme: ThemeType, type: HeadlineType) => css`
    color: ${get(theme, `DetailHeadline.color`)};
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    ${getSizes(type)};
    margin: 32px 0 16px 0;
`
