import { keyframes } from '@emotion/css'
import { css } from '@emotion/react'
import { IconLoaderType } from './IconLoader.types'
import { types } from './constants'
import { colors } from '../../_utils/colors'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const getColorByType = (type: IconLoaderType) => {
    switch (type) {
        case types.PRIMARY:
            return css`
                color: ${colors.neutral000};
            `
        case types.SECONDARY:
            return css`
                color: ${colors.primary};
            `
        case types.TERTIARY:
            return css`
                color: ${colors.neutral900};
            `
    }
}

export const loadingIcon = (size: number, type: IconLoaderType) => css`
    width: ${size}px;
    height: ${size}px;
    overflow: hidden;
    display: block;
    animation: 0.75s linear 0s infinite normal both running ${spin};
    ${getColorByType(type)};
`
