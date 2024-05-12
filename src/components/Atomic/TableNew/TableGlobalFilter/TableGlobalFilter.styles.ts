import { css } from '@emotion/react'
import { colors } from '../../_utils/colors'
import { ThemeType, getThemeColor, getTheme } from '../../_theme'
import { fontPrimary } from '../../_utils/commonStyles'

export const globalFilter = css`
    padding: 0 0 12px 0;
    display: flex;
    flex: 0 0 50px;
`

export const left = css`
    position: relative;
    display: flex;
    align-items: center;
    flex: 1 1 auto;
`

export const icon = css`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
`

export const searchInput = (theme: ThemeType) => css`
    border: 0;
    padding: 0 12px 0 26px;
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.neutral500};
    width: 100%;
    height: 30px;
    background: ${getThemeColor(theme, `TableGlobalFilter.searchInput.background`)};

    &:focus {
        outline: none;
    }
`
