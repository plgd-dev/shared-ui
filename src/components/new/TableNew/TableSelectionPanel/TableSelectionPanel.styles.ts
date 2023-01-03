import { css } from '@emotion/react'
import { panelSizes } from '../../Layout/LeftPanel/constants'
import { colors } from '../../_utils/colors'

export const selectionPanel = css`
    position: fixed;
    left: ${panelSizes.FULL}px;
    bottom: 0;
    right: 0;
    z-index: 20;

    .item-enter-done,
    .item-appear-done {
        //opacity: 1;
        transform: translateY(0);
    }

    .item-exit,
    .item-exit-active,
    .item-exit-done {
        //opacity: 0;
        transform: translateY(200px);
    }
`

export const isLeftPanelCollapsed = css`
    left: ${panelSizes.COLLAPSED};
`

export const inner = css`
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #fff;
    box-shadow: 0px -30px 20px rgba(28, 52, 99, 0.05);
    transition: all 0.35s;
    transform: translateY(200px);
`

export const left = css`
    display: flex;
    align-items: center;
`

export const label = css`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.neutral500};
`

export const selectionInfo = css`
    display: flex;
    align-items: center;
    /* Content/T2 */
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0a2965;
`

export const right = css`
    margin: 0 -4px;
    & > button {
        margin: 0 4px;
    }
`