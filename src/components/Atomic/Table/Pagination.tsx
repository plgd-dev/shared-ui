import { FC, useEffect } from 'react'
import BPagination from 'react-bootstrap/Pagination'
import { useIntl } from 'react-intl'
import classNames from 'classnames'
import { Props, defaultProps } from './Pagination.types'
import PaginationItems from './PaginationItems'
import { messages as t } from './Table.i18n'

const Pagination: FC<Props> = (props) => {
    const { className, canPreviousPage, canNextPage, pageCount, gotoPage, nextPage, previousPage, pageIndex, pageLength } = { ...defaultProps, ...props }
    const { formatMessage: _ } = useIntl()

    // If the last item is removed from the list, and we are on the last page (pageLength === 0), update the last page with (pageCount - 1)
    // Only do this if there are the least 2 pages available (pageCount > 1)
    useEffect(() => {
        if (pageLength === 0 && pageCount >= 1) {
            const prevPage = pageCount - 1
            gotoPage(prevPage >= 0 ? prevPage : 0)
        }
    }, [gotoPage, pageCount, pageLength])

    return (
        <BPagination className={classNames('plgd-pagination', className)}>
            {/* <BPagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} /> */}
            <BPagination.Prev className='step' disabled={!canPreviousPage} onClick={() => previousPage()}>
                {_(t.prev)}
            </BPagination.Prev>
            <PaginationItems activePage={pageIndex + 1} maxButtons={10} onItemClick={gotoPage} pageCount={pageCount} />
            <BPagination.Next className='step' disabled={!canNextPage} onClick={() => nextPage()}>
                {_(t.next)}
            </BPagination.Next>
            {/* <BPagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} /> */}
        </BPagination>
    )
}

Pagination.displayName = 'Pagination'

export default Pagination
