import { ReactNode } from 'react'

export type Props = {
    paginationComponent: ReactNode
    recentTasksPortal?: ReactNode
    recentTasksPortalTitle?: ReactNode
    footerExpanded: boolean
    setFooterExpanded: (expanded: boolean) => void
}
