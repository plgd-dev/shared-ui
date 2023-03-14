import { FC, useState } from 'react'
import { Props } from './TableGlobalFilter.types'
import { useAsyncDebounce } from 'react-table'
import * as styles from './TableGlobalFilter.styles'
import Icon from '../../Icon'
import Button from '../../Button'
import { messages as t } from '../Table.i18n'
import { useIntl } from 'react-intl'

const TableGlobalFilter: FC<Props> = (props) => {
    const { globalFilter, setGlobalFilter } = props
    const [value, setValue] = useState(globalFilter)
    const { formatMessage: _ } = useIntl()

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
                    placeholder={`${_(t.search)}...`}
                    value={value || ''}
                />
            </div>
            <div>
                <Button onClick={() => onChange(value)} size='small' variant='tertiary'>
                    {_(t.search)}
                </Button>
            </div>
        </div>
    )
}

TableGlobalFilter.displayName = 'TableGlobalFilter'

export default TableGlobalFilter
