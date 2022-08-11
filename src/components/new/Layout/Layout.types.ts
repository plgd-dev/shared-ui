import { BreadcrumbItem } from '../Breadcrumbs/Breadcrumbs.types'
import { ReactNode } from 'react'
import { layoutTypes } from './constants'

export type LayoutTypesType = typeof layoutTypes[keyof typeof layoutTypes]

export type Props = {
    className?: string
    breadcrumbs?: BreadcrumbItem[]
    loading?: boolean
    header?: ReactNode
    title?: string
    shimmeringBreadcrumbs?: boolean
    type?: LayoutTypesType
}

export const defaultProps = {
    type: layoutTypes.FULL_PAGE,
}
