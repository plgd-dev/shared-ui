import { css } from '@emotion/react'
import { colors } from '../_utils/colors'

export const actionButton = css`
    width: 20px;
    height: 20px;
`

export const floatingMenu = css`
    z-index: 10;
    background: #fff;
    border: 1px solid #e6e9ed;
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    padding: 8px 16px;
`

export const item = css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${colors.neutral500};
    transition: all 0.3s;
    padding: 8px 0;
    cursor: pointer;
    border-bottom: 1px solid ${colors.neutral200};

    &:hover {
        color: ${colors.primary};
    }

    &:last-child {
        border-bottom: 0;
    }
`

export const itemIcon = css`
    margin-right: 10px;
`

export const itemLabel = css`
    font-size: 14px;
    line-height: 14px;
`

export const icon = css`
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${colors.neutral500};
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        color: ${colors.primaryBonus};
    }
`

export const iconActive = css`
    color: ${colors.primaryBonus};
`
