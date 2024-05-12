import { css } from '@emotion/react'
import { HeadlineType } from './DetailHeadline.types'
import { ThemeType, getThemeColor, getTheme } from '../../Atomic/_theme'
import { fontPrimary } from '../../Atomic/_utils/commonStyles'

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
    color: ${getThemeColor(theme, `DetailHeadline.color`)};
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 600;
    ${getSizes(type)};
    margin: 32px 0 16px 0;
`
