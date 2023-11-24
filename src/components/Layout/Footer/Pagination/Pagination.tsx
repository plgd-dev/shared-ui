import { FC, useEffect } from 'react'
import { Props } from './Pagination.types'
import * as styles from './Pagination.styles'
import { convertSize, IconArrowLeft, IconArrowRight } from '../../../Atomic/Icon'
import PaginationItems from './PaginationItems'

const Pagination: FC<Props> = (props) => {
    const { className, canPreviousPage, canNextPage, pageCount, gotoPage, nextPage, previousPage, pageIndex, pageLength } = props

    // If the last item is removed from the list, and we are on the last page (pageLength === 0), update the last page with (pageCount - 1)
    // Only do this if there are the least 2 pages available (pageCount > 1)
    useEffect(() => {
        if (pageLength === 0 && pageCount >= 1) {
            const prevPage = pageCount - 1
            gotoPage(prevPage >= 0 ? prevPage : 0)
        }
    }, [gotoPage, pageCount, pageLength])

    return (
        <ul className={className} css={styles.pagination}>
            <li>
                <a
                    css={[styles.item, !canPreviousPage && styles.disabled]}
                    href='#'
                    onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        previousPage()
                    }}
                >
                    <IconArrowLeft {...convertSize(12)} />
                </a>
            </li>
            <PaginationItems activePage={pageIndex + 1} maxButtons={10} onItemClick={gotoPage} pageCount={pageCount} />
            <li>
                <a
                    css={[styles.item, !canNextPage && styles.disabled]}
                    href='#'
                    onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        nextPage()
                    }}
                >
                    <IconArrowRight {...convertSize(12)} />
                </a>
            </li>
        </ul>
    )
}

Pagination.displayName = 'Pagination'

export default Pagination
