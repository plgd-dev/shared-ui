import { ReactNode } from 'react'

export type Props = {
    contentLeft?: ReactNode
    footerExpanded?: boolean
    paginationComponent: ReactNode
    recentTasksPortal?: ReactNode
    recentTasksPortalTitle?: ReactNode
    setFooterExpanded?: (expanded: boolean) => void
}
