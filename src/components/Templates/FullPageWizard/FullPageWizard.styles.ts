import { css } from '@emotion/react'
import { ThemeType, get } from '../../Atomic/_theme'

export const wizard = (theme: ThemeType) => css`
    height: 100%;
    background: ${get(theme, `FullPageWizard.background`)};
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export const row = css`
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
`

export const leftCol = (theme: ThemeType) => css`
    background: ${get(theme, `FullPageWizard.leftCol.background`)};
    flex: 0 0 500px;
`

export const leftInner = css`
    padding: 32px 48px;
`

export const navigation = (theme: ThemeType) => css`
    margin: 64px 0 0 0;
    padding-left: 56px;
    list-style: none;
    position: relative;

    li {
        display: block;
        position: relative;
    }

    li + li {
        margin-top: 24px;

        &:after {
            content: '';
            display: block;
            background: ${get(theme, `FullPageWizard.navigation.line.background`)};
            width: 1px;
            height: calc(100% - 20px);
            position: absolute;
            left: -28px;
            top: -20px;
            bottom: 10px;
            transition: all 0.3s;
        }
    }
`

export const icon = (theme: ThemeType) => css`
    width: 32px;
    height: 32px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -44px;
    background: ${get(theme, `FullPageWizard.leftCol.background`)};
`

export const link = (theme: ThemeType) => css`
    color: ${get(theme, `FullPageWizard.navigation.link.color`)};
    font-weight: 600;
    opacity: 0.6;
    transition: all 0.3s;
`

export const description = (theme: ThemeType) => css`
    color: ${get(theme, `FullPageWizard.navigation.description.color`)};
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin: 0;
    transition: all 0.3s;
`

export const visited = (theme: ThemeType) => css`
    opacity: 1;

    &:after {
        background: ${get(theme, `FullPageWizard.navigation.line.visited.background`)}!important;
    }
`

export const rightInner = css`
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 48px;
    position: relative;
    overflow: auto;
`

export const close = (theme: ThemeType) => css`
    position: fixed;
    top: 32px;
    right: 48px;
    color: ${get(theme, `FullPageWizard.close.color`)};
    transition: all 0.3s;
    display: flex;
    align-items: center;

    span {
        padding-right: 8px;
    }
`

export const content = css`
    max-width: 600px;
    margin: auto;
`
