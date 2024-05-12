import { css } from '@emotion/react'
import { SwitcherSizeType } from './Switch.types'
import { colors } from '../_utils/colors'
import styled from '@emotion/styled'
import { ThemeType, getThemeColor, getTheme } from '../_theme'
import { fontPrimary } from '../_utils/commonStyles'

export const switchC = css`
    display: inline-flex;
    align-items: center;
`

export const labelBefore = css`
    flex-direction: row-reverse;
`

const getSwitcherSize = (size: SwitcherSizeType) => css`
    width: ${size === 'big' ? '32px' : '24px'};
    height: ${size === 'big' ? '20px' : '16px'};
    border-radius: ${size === 'big' ? '26.6667px' : '20px'};
    overflow: hidden;
`

export const switcher = (size: SwitcherSizeType) => css`
    ${getSwitcherSize(size)};
    background: ${colors.neutral300};
    position: relative;
`

export const slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => getThemeColor(props.theme, `Switch.background`)};
    transition: 0.4s;

    &:before {
        position: absolute;
        content: '';
        left: 2px;
        bottom: 2px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
        width: ${(props: any) => (props.size === 'big' ? '16px' : '12px')};
        height: ${(props: any) => (props.size === 'big' ? '16px' : '12px')};
    }
`

export const input = (theme: ThemeType, size: SwitcherSizeType, disabled: boolean) => css`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;

    &:checked ~ ${slider} {
        background: ${disabled ? getThemeColor(theme, 'Switch.input.background.disabled') : getThemeColor(theme, 'Switch.input.background.primary')};

        &:before {
            transform: translateX(${size === 'big' ? '12px' : '8px'});
        }
    }
`

export const loading = css`
    & ~ ${slider} {
        background: ${colors.neutral500}!important;
    }
`

export const sliderStyle = (size: SwitcherSizeType) => css`
    ${getSwitcherSize(size)};

    &:before {
        width: ${size === 'big' ? '16px' : '12px'};
        height: ${size === 'big' ? '16px' : '12px'};
    }
`

export const label = (theme: ThemeType) => css`
    font-size: 14px;
    color: ${getThemeColor(theme, `Switch.label.color`)};
    padding-left: 8px;
    cursor: pointer;
    line-height: 18px;
    font-family: ${getTheme(theme, `Global.fontPrimary`, fontPrimary)};
    font-style: normal;
    font-weight: 400;
`

export const labelBeforeSwitch = css`
    padding-left: 0;
    padding-right: 8px;
`

export const disabled = css`
    cursor: not-allowed !important;
`
