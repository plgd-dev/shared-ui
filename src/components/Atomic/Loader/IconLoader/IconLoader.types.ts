import { Props as IconProps } from '../../Icon/Icon.types'
import { types } from './constants'

export type IconLoaderType = (typeof types)[keyof typeof types]

export type Props = {
    center?: boolean
    type?: IconLoaderType
} & Omit<IconProps, 'icon'>

export const defaultProps = {
    type: types.PRIMARY,
}
