export type Props = {
    dataTestId?: string
    globalFilter: any
    i18n: {
        search: string
    }
    preGlobalFilteredRows: any
    setGlobalFilter: any
    showFilterButton?: boolean
}

export const defaultProps: Partial<Props> = {
    i18n: {
        search: 'Search',
    },
    showFilterButton: true,
}
