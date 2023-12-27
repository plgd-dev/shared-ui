import plgd from './plgd'
import lGet from 'lodash/get'

export type ThemeType = Partial<typeof plgd>

export const defaultTheme = 'plgd'

export function get(from: object, key: string, def?: any): any {
    const g = lGet(from, `colors.${key}`, def)
    return g === '' ? def : g
}

export const isValidHex = (color: any) => {
    if (!color || typeof color !== 'string') return false

    // Validate hex values
    if (color.substring(0, 1) === '#') color = color.substring(1)

    switch (color.length) {
        case 3:
            return /^[0-9A-F]{3}$/i.test(color)
        case 6:
            return /^[0-9A-F]{6}$/i.test(color)
        case 8:
            return /^[0-9A-F]{8}$/i.test(color)
        default:
            return false
    }
}
