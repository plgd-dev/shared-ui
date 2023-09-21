import light from './light'
import lGet from 'lodash/get'
import siemens from './siemens'

export type ThemeType = Partial<typeof light>

export type PlgdThemeType = 'light' | 'siemens'

export function get(from: object, key: string, def?: any): any {
    const g = lGet(from, key, def)
    return g === '' ? def : g
}

export const getTheme = (theme: PlgdThemeType) => {
    if (theme === 'siemens') {
        return siemens
    }

    return light
}
