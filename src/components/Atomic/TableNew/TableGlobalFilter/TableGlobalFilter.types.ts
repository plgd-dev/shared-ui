export type Props = {
    globalFilter: any
    preGlobalFilteredRows: any
    setGlobalFilter: any
    i18n: {
        search: string
    }
    showFilterButton?: boolean
}

export const defaultProps: Partial<Props> = {
    i18n: {
        search: 'Search',
    },
    showFilterButton: true,
}
