import { ReactNode } from 'react'

export type Props = {
    breadcrumbs?: ReactNode
    onCollapseToggle?: () => void
    userWidget?: ReactNode
}
