import { FC, useMemo, useState } from 'react'
import { Props } from './TableGlobalFilter.types'
import { useAsyncDebounce } from 'react-table'
import * as styles from './TableGlobalFilter.styles'
import Icon from '../../Icon'
import Button from '../../Button'

const TableGlobalFilter: FC<Props> = (props) => {
    const { globalFilter, preGlobalFilteredRows, setGlobalFilter } = props
    const count = useMemo(() => preGlobalFilteredRows.length, [preGlobalFilteredRows])
    const [value, setValue] = useState(globalFilter)

    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <div css={styles.globalFilter}>
            <div css={styles.left}>
                <Icon css={styles.icon} icon='search' />
                <input
                    css={styles.searchInput}
                    onChange={(e) => {
                        setValue(e.target.value)
                        onChange(e.target.value)
                    }}
                    placeholder='Search...'
                    value={value || ''}
                />
            </div>
            <div>
                <Button onClick={() => onChange(value)} size='small' variant='tertiary'>
                    Search
                </Button>
            </div>
        </div>
    )
}

TableGlobalFilter.displayName = 'TableGlobalFilter'

export default TableGlobalFilter
