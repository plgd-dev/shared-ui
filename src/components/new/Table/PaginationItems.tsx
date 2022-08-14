import { FC } from 'react'
import BPagination from 'react-bootstrap/Pagination'
import { Props, defaultProps } from './PaginationItems.types'

const PaginationItems: FC<Props> = (props) => {
    const { activePage, pageCount, maxButtons, onItemClick } = props
    const pageButtons = []

    let startPage
    let endPage

    if (maxButtons && maxButtons < pageCount) {
        startPage = Math.max(Math.min(activePage - Math.floor(maxButtons / 2, 10), pageCount - maxButtons + 1), 1)
        endPage = startPage + maxButtons - 1
    } else {
        startPage = 1
        endPage = pageCount
    }

    for (let page = startPage; page <= endPage; ++page) {
        pageButtons.push(
            <BPagination.Item onClick={() => onItemClick(page - 1)} key={page} active={page === activePage}>
                {page}
            </BPagination.Item>
        )
    }

    if (startPage > 1) {
        if (startPage > 2) {
            pageButtons.unshift(<BPagination.Ellipsis key='ellipsisFirst' disabled />)
        }

        pageButtons.unshift(
            <BPagination.Item onClick={() => onItemClick(1)} key={1} active={false}>
                {'1'}
            </BPagination.Item>
        )
    }

    if (endPage < pageCount) {
        if (endPage < pageCount - 1) {
            pageButtons.push(<BPagination.Ellipsis key='ellipsis' disabled />)
        }

        pageButtons.push(
            <BPagination.Item onClick={() => onItemClick(pageCount - 1)} key={pageCount} active={false}>
                {pageCount}
            </BPagination.Item>
        )
    }

    return <>{pageButtons}</>
}

PaginationItems.displayName = 'PaginationItems'
PaginationItems.defaultProps = defaultProps

export default PaginationItems
