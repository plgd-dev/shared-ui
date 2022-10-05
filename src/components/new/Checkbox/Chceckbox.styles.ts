import { css } from '@emotion/react'
import { colors } from '../_utils/colors'
import styled from '@emotion/styled'

export const checkbox = css`
    display: flex;
    align-items: flex-start;
    position: relative;
    overflow: hidden;
`

export const check = styled.span`
    width: 16px;
    height: 16px;
    flex: 0 0 16px;
    border: 1px solid #e6e9ed;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.25s;
    position: relative;
    box-sizing: border-box;

    &:after {
        content: '';
        display: block;
        transition: all 0.25s;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 2px;
        background: ${colors.primary};
        opacity: 0;
    }
`

export const input = css`
    width: 1px;
    height: 1px;
    position: absolute;
    left: -10px;

    &:checked ~ ${check} {
        border-color: ${colors.primary};

        &:after {
            opacity: 1;
        }
    }
`

export const label = css`
    font-size: 12px;
    color: #81868c;
    padding-left: 8px;
    cursor: pointer;
    line-height: 18px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
`
