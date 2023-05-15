export type Props = {
    activePage: number
    maxButtons?: number
    onItemClick: (item: number) => void
    pageCount: number
}

export const defaultProps = {
    maxButtons: 0,
}
