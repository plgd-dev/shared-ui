import { FC } from 'react'

import Table from '../../Atomic/TableNew'
import { RESOURCES_DEFAULT_PAGE_SIZE } from '../../../common/constants'
import { Props } from './DevicesResourcesList.types'

const DevicesResourcesList: FC<Props> = (props) => {
    const { data, isActiveTab, pageSize, i18n, columns } = props

    return (
        <Table
            columns={columns}
            data={data || []}
            defaultPageSize={RESOURCES_DEFAULT_PAGE_SIZE}
            defaultSortBy={[
                {
                    id: 'href',
                    desc: false,
                },
            ]}
            height={pageSize.height}
            i18n={i18n}
            paginationPortalTargetId={isActiveTab ? 'paginationPortalTarget' : undefined}
        />
    )
}

DevicesResourcesList.displayName = 'DevicesResourcesList'

export default DevicesResourcesList
