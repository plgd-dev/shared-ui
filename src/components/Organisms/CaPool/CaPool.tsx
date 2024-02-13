import React, { FC, useMemo, useState } from 'react'

import * as styles from './CaPool.styles'
import Headline from '../../Atomic/Headline'
import { Props } from './CaPool.types'
import Button, { buttonSizes } from '../../Atomic/Button'
import IconPlus from '../../Atomic/Icon/components/IconPlus'
import Table from '../../Atomic/TableNew'
import TableActionButton from '../TableActionButton'
import { IconArrowDetail, IconTrash } from '../../Atomic'
import Spacer from '../../Atomic/Spacer'
import isFunction from 'lodash/isFunction'
import IconEdit from '../../Atomic/Icon/components/IconEdit'
import IconDownload from '../../Atomic/Icon/components/IconDownload'

export const CA_BASE64_PREFIX = 'data:;base64,'

const CaPool: FC<Props> = (props) => {
    const { customComponent, data, headline, headlineRef, i18n, onAdd, onDelete, onEdit, onDownload, onUpdate, onView, tableSearch } = props
    const [defaultPageSize, setDefaultPageSize] = useState(10)

    const columns = useMemo(
        () => [
            {
                Header: '',
                accessor: 'name',
                Cell: ({ value }: { value: string | number }) => (
                    <span className='no-wrap-text' style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {typeof value === 'string' ? value.replace(CA_BASE64_PREFIX, '') : value}
                    </span>
                ),
                style: { maxWidth: '300px' },
            },
            {
                Header: '',
                accessor: 'action',
                disableSortBy: true,
                Cell: ({ row }: any) => {
                    const {
                        original: { id, name },
                    } = row

                    const items = []

                    if (isFunction(onDownload) && !name.startsWith('/')) {
                        items.push({
                            onClick: () => onDownload(id),
                            label: i18n.download,
                            icon: <IconDownload />,
                        })
                    }

                    if (isFunction(onEdit)) {
                        items.push({
                            onClick: () => onEdit(id),
                            label: i18n.edit,
                            icon: <IconEdit />,
                        })
                    }

                    if (isFunction(onDelete)) {
                        items.push({
                            onClick: () => onDelete(id),
                            label: i18n.delete,
                            icon: <IconTrash />,
                        })
                    }

                    if (isFunction(onView)) {
                        items.push({
                            onClick: () => onView(id),
                            label: i18n.view,
                            icon: <IconArrowDetail />,
                        })
                    }

                    if (isFunction(onUpdate)) {
                        items.push({
                            onClick: () => onUpdate(id),
                            label: i18n.update,
                            icon: <IconEdit />,
                        })
                    }

                    return items ? <TableActionButton items={items} /> : ''
                },
                className: 'actions',
            },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [onDelete, onView]
    )

    return (
        <div>
            <div css={styles.header}>
                <Headline ref={headlineRef} type='h6'>
                    {headline}
                </Headline>
                {isFunction(onAdd) && (
                    <Button htmlType='button' icon={<IconPlus />} onClick={onAdd} size={buttonSizes.SMALL} variant='primary'>
                        {headline}
                    </Button>
                )}
            </div>
            {!!customComponent && <Spacer type='pb-4'>{customComponent}</Spacer>}
            <Table
                columns={columns}
                data={data}
                defaultPageSize={defaultPageSize}
                globalSearch={tableSearch}
                hideHeader={true}
                i18n={{
                    search: i18n.search,
                }}
                showFilterButton={false}
            />
            {data.length > 10 && defaultPageSize === 10 && (
                <Spacer type='pt-6'>
                    <Button fullWidth htmlType='button' onClick={() => setDefaultPageSize(1000)}>
                        {i18n.showMore}
                    </Button>
                </Spacer>
            )}
        </div>
    )
}

CaPool.displayName = 'CaPool'

export default CaPool
