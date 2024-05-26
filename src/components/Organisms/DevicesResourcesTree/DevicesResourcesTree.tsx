import { FC, useMemo } from 'react'
import classNames from 'classnames'

import TreeTable from '../../Atomic/TreeTable'
import { devicesStatuses } from '../../../common/constants'
import { createNestedResourceData } from '../../../common/utils'
import { Props } from './DevicesResourcesTree.types'

const DevicesResourcesTree: FC<Props> = (props) => {
    const { data: rawData, dataTestId, deviceStatus, columns } = props
    const isUnregistered = deviceStatus === devicesStatuses.UNREGISTERED
    const greyedOutClassName = classNames({ 'grayed-out': isUnregistered })
    const data = useMemo(() => createNestedResourceData(rawData), [rawData])

    return <TreeTable className={greyedOutClassName} columns={columns} data={data || []} dataTestId={dataTestId} />
}

DevicesResourcesTree.displayName = 'DevicesResourcesTree'

export default DevicesResourcesTree
