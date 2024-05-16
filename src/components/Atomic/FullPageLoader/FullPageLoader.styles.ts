import { css } from '@emotion/react'
import { getTheme, ThemeType } from '../_theme'
import { fontPrimary } from '../_utils/commonStyles'
import { colors } from '../_utils/colors'

export const holder = (theme: ThemeType) => css`
    height: calc(100% - 20px);
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    color: ${getTheme(theme, `colorPalette.neutral500`, colors.neutral500)};
    font-size: 20px;
`
