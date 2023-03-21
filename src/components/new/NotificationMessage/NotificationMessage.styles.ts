import { css } from '@emotion/react'
import { panelSizes } from '../Layout/LeftPanel/constants'
import { colors } from '../_utils/colors'
import { ToastTypesType } from '../Notification/Toast.types'
import { getColorByType } from '../Notification/Toast.styles'
import { fontPrimary } from '../_utils/commonStyles'
import { COLLAPSE_ANIMATION_TIME } from '../Layout/constants'

export const message = css`
    position: fixed;
    left: ${panelSizes.FULL}px;
    right: 0;
    bottom: 65px;
    transition: all ${COLLAPSE_ANIMATION_TIME};
`

export const collapsed = css`
    left: ${panelSizes.COLLAPSED}px;
`

export const messageInner = css`
    position: relative;
    z-index: 2;
    max-width: 715px;
    margin: 0 auto;
    background: #fff;
    border: 1px solid ${colors.neutral200};
    box-shadow: 0 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    overflow: hidden;
    padding: 24px 16px 24px 20px;
    display: flex;
    align-items: center;

    &:before {
        content: '';
        display: block;
        position: absolute;
        width: 5px;
        height: calc(100% + 2px);
        background: ${colors.primaryDarken};
        top: -1px;
        left: -1px;
        bottom: -1px;
    }
`

export const icon = (type: ToastTypesType) => css`
    color: ${getColorByType(type)};
`

export const type = (type: ToastTypesType) => css`
    color: ${getColorByType(type)};
    padding-left: 12px;
    text-transform: capitalize;
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`

export const messageText = css`
    font-family: ${fontPrimary};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.neutral500};
    padding-left: 20px;
`
