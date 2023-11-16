import plgd from './plgd'
import lGet from 'lodash/get'

export type ThemeType = Partial<typeof plgd>

export const defaultTheme = 'plgd'

export function get(from: object, key: string, def?: any): any {
    const g = lGet(from, `colors.${key}`, def)
    return g === '' ? def : g
}
