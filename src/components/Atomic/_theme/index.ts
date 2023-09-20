import light from './light'
import lGet from 'lodash/get'

export type ThemeType = Partial<typeof light>

export type PlgdThemeType = 'light' | 'siemens'

export function get(from: object, key: string, def?: any): any {
    const g = lGet(from, key, def)
    return g === '' ? def : g
}
