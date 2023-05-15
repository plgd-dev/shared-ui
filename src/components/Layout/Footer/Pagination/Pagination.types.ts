export type Props = {
    canNextPage: boolean
    canPreviousPage: boolean
    className?: string
    disabled?: boolean
    gotoPage: (page: number) => void
    nextPage: () => void
    pageCount: number
    pageIndex: number
    pageLength: number
    pageSize: number
    pageSizes?: number[]
    previousPage: () => void
    setPageSize: () => void
}

export const defaultProps = {
    pageSizes: [10, 20, 30, 40, 50],
}
