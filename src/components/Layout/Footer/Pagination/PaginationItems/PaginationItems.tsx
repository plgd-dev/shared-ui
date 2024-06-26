import { FC, Fragment } from 'react'
import { Props, defaultProps } from './PaginationItems.types'
import * as styles from '../Pagination.styles'

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
            <li key={page}>
                <a
                    css={[styles.item, page === activePage && styles.active]}
                    href='#'
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        onItemClick(page - 1)
                    }}
                    role='button'
                >
                    {page}
                </a>
            </li>
        )
    }

    if (startPage > 1) {
        if (startPage > 2) {
            // pageButtons.unshift(<BPagination.Ellipsis key='ellipsisFirst' disabled />)
        }

        pageButtons.unshift(
            <li key={1}>
                <a
                    css={styles.item}
                    href='#'
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        onItemClick(1)
                    }}
                    role='button'
                >
                    1
                </a>
            </li>
        )
    }

    if (endPage < pageCount) {
        if (endPage < pageCount - 1) {
            // pageButtons.push(<BPagination.Ellipsis key='ellipsis' disabled />)
        }

        pageButtons.push(
            <li key={pageCount}>
                <a
                    css={styles.item}
                    href='#'
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        onItemClick(pageCount - 1)
                    }}
                    role='button'
                >
                    {pageCount}
                </a>
            </li>
        )
    }

    return <Fragment>{pageButtons}</Fragment>
}

PaginationItems.displayName = 'PaginationItems'

export default PaginationItems
