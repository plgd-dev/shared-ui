import light from '../_theme/light'
import lGet from 'lodash/get'

export type ThemeType = Partial<typeof light>

export function get(from: object, key: string, def?: any): any {
    const g = lGet(from, key, def)
    return g === '' ? def : g
}
