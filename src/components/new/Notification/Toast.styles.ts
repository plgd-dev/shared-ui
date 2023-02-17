import { css } from '@emotion/react'
import { css as cssRaw } from '@emotion/css'
import { colors } from '../_utils/colors'
import { ToastTypesType } from './Toast.types'
import { toastTypes } from './constants'

const getColorByType = (type: ToastTypesType) => {
    switch (type) {
        case toastTypes.info:
            return colors.primaryDarken
        case toastTypes.success:
            return colors.green
        case toastTypes.warning:
            return colors.yellow
        case toastTypes.error:
            return colors.red
    }
}

export const toast = (type: ToastTypesType) => cssRaw`
    overflow: visible;
    background: #fff;
    border: 1px solid ${colors.neutral200};
    box-shadow: 0px 30px 40px rgba(28, 52, 99, 0.1);
    border-radius: 8px;
    margin-bottom: 12px;
    padding: 16px;
    
    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 4px;
        height: 100%;
        background: ${getColorByType(type)};
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
    
    & > div {
        padding: 0;
    }
    
    .close-button {
        transition: all 0.25s;
        opacity: 0;
    }
    
    &:hover {
        .close-button {
            opacity: 1;
        }
    }
`

export const toastInner = css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const icon = (type: ToastTypesType) => css`
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    color: ${getColorByType(type)};
`

export const content = css`
    padding-left: 12px;
`

export const headline = (type: ToastTypesType) => css`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
    color: ${getColorByType(type)};
`

export const text = css`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.neutral500};
`

export const closeButton = css`
    position: absolute;
    top: -10px;
    right: -10px;
`
