import React, { FC, useCallback, useMemo } from 'react'
import isFunction from 'lodash/isFunction'
import { v5 } from 'uuid'

import FormLabel from '../../Atomic/FormLabel'
import FormGroup from '../../Atomic/FormGroup'
import { DataType, Props } from './CaList.types'
import * as styles from './CaList.styles'
import IconDownload from '../../Atomic/Icon/components/IconDownload'
import { IconArrowDetail, IconTrash } from '../../Atomic/Icon'
import TableActionButton from '../TableActionButton'
import Spacer from '../../Atomic/Spacer'

const CaList: FC<Props> = (props) => {
    const { actions, data, formGroupProps, i18n, largePadding } = props

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

    const id = useMemo(() => formGroupProps?.id || v5('Uploaded CA Pools', v5.URL), [formGroupProps])

    if (!data || data.length === 0) {
        return null
    }

    return (
        <FormGroup css={styles.list} {...formGroupProps} id={id}>
            {i18n.title && (
                <Spacer type={largePadding ? 'pl-6' : ''}>
                    <FormLabel marginBottom={!largePadding} text={i18n.title} />
                </Spacer>
            )}
            <ul>
                {data?.map((d, key) => (
                    <li css={[styles.row, largePadding && styles.largePadding]} key={key}>
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
