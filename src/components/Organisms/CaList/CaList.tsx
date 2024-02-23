import React, { FC, useCallback } from 'react'

import FormLabel from '../../Atomic/FormLabel'
import FormGroup from '../../Atomic/FormGroup'
import { DataType, Props } from './CaList.types'
import * as styles from './CaList.styles'
import isFunction from 'lodash/isFunction'
import IconDownload from '../../Atomic/Icon/components/IconDownload'
import { IconArrowDetail, IconTrash } from '../../Atomic'
import TableActionButton from '../TableActionButton'

const CaList: FC<Props> = (props) => {
    const { actions, data, i18n } = props

    const getButtons = useCallback(
        (item: DataType, index: number) => {
            const items = []

            if (actions?.onDownload && isFunction(actions?.onDownload) && !item.name.startsWith('/')) {
                items.push({
                    onClick: () => actions?.onDownload?.(index),
                    label: i18n.download,
                    icon: <IconDownload />,
                })
            }

            if (actions?.onDelete && isFunction(actions?.onDelete)) {
                items.push({
                    onClick: () => actions?.onDelete?.(index),
                    label: i18n.delete,
                    icon: <IconTrash />,
                })
            }

            if (actions?.onView && isFunction(actions?.onView)) {
                items.push({
                    onClick: () => actions?.onView?.(index),
                    label: i18n.view,
                    icon: <IconArrowDetail />,
                })
            }

            return items ? <TableActionButton items={items} /> : null
        },
        [actions, i18n.delete, i18n.download, i18n.view]
    )

    if (!data || data.length === 0) {
        return null
    }

    return (
        <FormGroup css={styles.list} id='1'>
            <FormLabel text='Uploaded CA Pools' />
            <ul>
                {data?.map((d, key) => (
                    <li css={styles.row} key={key}>
                        <span css={styles.name}>{d.name}</span>
                        <div>{getButtons(d, key)}</div>
                    </li>
                ))}
            </ul>
        </FormGroup>
    )
}

CaList.displayName = 'CaList'

export default CaList
