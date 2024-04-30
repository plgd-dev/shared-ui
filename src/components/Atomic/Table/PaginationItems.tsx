import { FC, Fragment } from 'react'
import BPagination from 'react-bootstrap/Pagination'
import { Props, defaultProps } from './PaginationItems.types'

const PaginationItems: FC<Props> = (props) => {
    const { activePage, pageCount, maxButtons, onItemClick } = { ...defaultProps, ...props }
    const pageButtons = []

    let startPage
    let endPage

    if (maxButtons && maxButtons < pageCount) {
        startPage = Math.max(Math.min(activePage - Math.floor(maxButtons / 2), pageCount - maxButtons + 1), 1)
        endPage = startPage + maxButtons - 1
    } else {
        startPage = 1
        endPage = pageCount
    }

    for (let page = startPage; page <= endPage; ++page) {
        pageButtons.push(
            <BPagination.Item active={page === activePage} key={page} onClick={() => onItemClick(page - 1)}>
                {page}
            </BPagination.Item>
        )
    }

    if (startPage > 1) {
        if (startPage > 2) {
            pageButtons.unshift(<BPagination.Ellipsis disabled key='ellipsisFirst' />)
        }

        pageButtons.unshift(
            <BPagination.Item active={false} key={1} onClick={() => onItemClick(1)}>
                {'1'}
            </BPagination.Item>
        )
    }

    if (endPage < pageCount) {
        if (endPage < pageCount - 1) {
            pageButtons.push(<BPagination.Ellipsis disabled key='ellipsis' />)
        }

        pageButtons.push(
            <BPagination.Item active={false} key={pageCount} onClick={() => onItemClick(pageCount - 1)}>
                {pageCount}
            </BPagination.Item>
        )
    }

    return <Fragment>{pageButtons}</Fragment>
}

PaginationItems.displayName = 'PaginationItems'

export default PaginationItems
