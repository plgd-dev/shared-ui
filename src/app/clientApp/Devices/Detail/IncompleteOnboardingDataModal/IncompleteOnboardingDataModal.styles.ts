import { css } from '@emotion/react'
import { ThemeType, getThemeColor } from '../../../../../components/Atomic/_theme'

export const topLine = css`
    display: flex;
    justify-content: flex-end;
    padding: 0 0 12px 0;
`

export const row = (theme: ThemeType) => css`
    padding: 6px 0;
    background: ${getThemeColor(theme, `IncompleteOnboardingDataModal.row.background`)};
`

export const inputWrapper = css`
    width: 420px;

    @media (max-width: 767px) {
        width: 100%;
    }
`
