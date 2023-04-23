import { FC, useMemo } from 'react'
import classNames from 'classnames'

import { TreeTable } from '../../new/Table'
import { devicesStatuses } from '../../../common/constants'
import { createNestedResourceData } from '../../../common/utils/devices'
import { Props } from './DevicesResourcesTree.types'

const DevicesResourcesTree: FC<Props> = (props) => {
    const { data: rawData, deviceStatus, columns } = props
    const isUnregistered = deviceStatus === devicesStatuses.UNREGISTERED
    const greyedOutClassName = classNames({ 'grayed-out': isUnregistered })
    const data = useMemo(() => createNestedResourceData(rawData), [rawData])

    return <TreeTable className={greyedOutClassName} columns={columns} data={data || []} />
}

DevicesResourcesTree.displayName = 'DevicesResourcesTree'

export default DevicesResourcesTree
