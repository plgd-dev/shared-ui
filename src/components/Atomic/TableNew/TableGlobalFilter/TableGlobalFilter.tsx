import { FC, useState } from 'react'
import { defaultProps, Props } from './TableGlobalFilter.types'
import { useAsyncDebounce } from 'react-table'
import * as styles from './TableGlobalFilter.styles'
import { IconSearch } from '../../Icon'
import Button from '../../Button'

const TableGlobalFilter: FC<Props> = (props) => {
    const { globalFilter, setGlobalFilter, i18n } = { ...defaultProps, ...props }
    const [value, setValue] = useState(globalFilter)

    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <div css={styles.globalFilter}>
            <div css={styles.left}>
                <IconSearch css={styles.icon} />
                <input
                    css={styles.searchInput}
                    onChange={(e) => {
                        setValue(e.target.value)
                        onChange(e.target.value)
                    }}
                    placeholder={`${i18n.search}...`}
                    value={value || ''}
                />
            </div>
            <div>
                <Button onClick={() => onChange(value)} size='small' variant='filter'>
                    {i18n.search}
                </Button>
            </div>
        </div>
    )
}

TableGlobalFilter.displayName = 'TableGlobalFilter'
TableGlobalFilter.defaultProps = defaultProps

export default TableGlobalFilter
