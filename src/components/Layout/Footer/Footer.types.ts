import { ReactNode } from 'react'

export type Props = {
    className?: string
    contentLeft?: ReactNode
    footerExpanded?: boolean
    id?: string
    innerPortalTarget?: ReactNode
    paginationComponent: ReactNode
    recentTasksPortal?: ReactNode
    recentTasksPortalTitle?: ReactNode
    setFooterExpanded?: (expanded: boolean) => void
}
