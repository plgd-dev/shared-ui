import { FC, useState } from 'react'
import { defaultProps, Props } from './TableGlobalFilter.types'
import { useAsyncDebounce } from 'react-table'
import * as styles from './TableGlobalFilter.styles'
import { IconSearch } from '../../Icon'
import Button from '../../Button'

const TableGlobalFilter: FC<Props> = (props) => {
    const { dataTestId, globalFilter, setGlobalFilter, i18n, showFilterButton } = { ...defaultProps, ...props }
    const [value, setValue] = useState(globalFilter)

    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <div css={styles.globalFilter} data-test-id={dataTestId}>
            <div css={styles.left}>
                <IconSearch css={styles.icon} />
                <input
                    css={styles.searchInput}
                    data-test-id={dataTestId?.concat('-input')}
                    onChange={(e) => {
                        setValue(e.target.value)
                        onChange(e.target.value)
                    }}
                    placeholder={`${i18n.search}...`}
                    value={value || ''}
                />
            </div>
            {showFilterButton && (
                <div>
                    <Button data-test-id={dataTestId?.concat('-button')} onClick={() => onChange(value)} size='small' variant='filter'>
                        {i18n.search}
                    </Button>
                </div>
            )}
        </div>
    )
}

TableGlobalFilter.displayName = 'TableGlobalFilter'

export default TableGlobalFilter
