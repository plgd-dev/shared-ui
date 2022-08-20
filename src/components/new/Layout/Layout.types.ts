import { BreadcrumbItem } from '../Breadcrumbs/Breadcrumbs.types'
import { ReactNode } from 'react'
import { layoutTypes } from './constants'

export type LayoutTypesType = typeof layoutTypes[keyof typeof layoutTypes]

export type Props = {
    breadcrumbs?: BreadcrumbItem[]
    children: ReactNode
    className?: string
    header?: ReactNode
    loading?: boolean
    shimmeringBreadcrumbs?: boolean
    title?: string
    type?: LayoutTypesType
}

export const defaultProps = {
    type: layoutTypes.FULL_PAGE,
}
