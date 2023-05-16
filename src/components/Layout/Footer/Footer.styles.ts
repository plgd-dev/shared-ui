import { css } from '@emotion/react'
import { colors } from '../../Atomic/_utils/colors'
import { fontPrimary } from '../../Atomic/_utils/commonStyles'

export const footer = css`
    border-top: 1px solid #e6e9ed;
    background: #fff;
    padding: 0 40px;
    box-sizing: border-box;
    flex-shrink: 0;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    z-index: 2;
`

export const footerInner = css`
    flex: 0 0 420px;
`

export const footerMainLine = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    min-height: 64px;
`

export const recentTasks = css`
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: ${colors.neutral900};
    text-decoration: none;
    display: flex;
    align-items: center;
    padding-right: 22px;
    position: relative;
`

export const icon = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    color: ${colors.neutral500};
    transition: all 0.3s;
`

export const panelOpen = css`
    transform: translateY(-50%) rotate(180deg);
`
