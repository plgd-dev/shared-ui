export type Props = {
    dataTestId?: string
    globalFilter: any
    i18n: {
        search: string
    }
    setGlobalFilter: any
    showFilterButton?: boolean
}

export const defaultProps: Partial<Props> = {
    i18n: {
        search: 'Search',
    },
    showFilterButton: true,
}
