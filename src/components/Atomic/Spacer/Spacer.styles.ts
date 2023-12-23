import { css } from '@emotion/react'
import isEmpty from 'lodash/isEmpty'

import { Property } from './Spacer.types'
import { get, ThemeType } from '../_theme'

const spacerSizes = {
    0: 0,
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    auto: 'auto',
}

const spaceType = {
    m: 'margin',
    p: 'padding',
}

const spacePosition = {
    t: 'top',
    r: 'right',
    b: 'bottom',
    l: 'left',
}

const spaceSpecialPosition = ['x', 'y']

const getPropertyNames = (typeProp: string) => {
    const result: any = []
    const typeArr = typeProp.split(' ') // split type by blank space

    typeArr.forEach((type) => {
        const typeSplit = type.split('-')
        const typeArr = typeSplit[0].split('')

        // @ts-ignore
        const size: string = spacerSizes[typeSplit[1]]
        // @ts-ignore
        const name = spaceType[typeArr[0]] as string
        // @ts-ignore
        const sizeS = spacePosition[typeArr[1]] as string

        if (typeArr.length > 1 && spaceSpecialPosition.includes(typeArr[1])) {
            if (typeArr[1] === 'x') {
                result.push({ name: name + '-' + spacePosition.r, size }, { name: name + '-' + spacePosition.l, size })
            } else if (typeArr[1] === 'y') {
                result.push({ name: name + '-' + spacePosition.t, size }, { name: name + '-' + spacePosition.b, size })
            }
        } else if (typeArr.length > 1) {
            result.push({ name: name + '-' + sizeS, size })
        } else if (typeArr.length === 1) {
            result.push({ name: name, size })
        }
    })

    return result
}

export const spacer = (typeProp: string, theme: ThemeType) => css`
    ${getPropertyNames(typeProp)
        .filter((v: Property) => !isEmpty(v))
        .map(
            (property: Property) => css`
                ${property.name}: ${get(theme, 'Spacer.sizes.' + property.size, property.size)}!important;
            `
        )}
`
