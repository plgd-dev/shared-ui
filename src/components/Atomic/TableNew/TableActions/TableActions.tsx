import { FC, memo } from 'react'
import { Props } from './TableActions.types'
import * as styles from './TableActions.styles'
import Tooltip, { FloatingDelayGroup } from '../../Tooltip'
import Icon from '../../Icon'

const TableActions: FC<Props> = memo((props) => {
    const { className, id, items } = props
    return (
        <div className={className} id={id}>
            <FloatingDelayGroup delay={200}>
                <div css={styles.actionItems}>
                    {items.map((item, key) => (
                        <div css={styles.actionItem} key={key}>
                            <Tooltip content={item.tooltipText} id={item.id}>
                                <Icon css={styles.icon} icon={item.icon} onClick={item.onClick} size={item.size || 20} />
                            </Tooltip>
                        </div>
                    ))}
                </div>
            </FloatingDelayGroup>
        </div>
    )
})

TableActions.displayName = 'TableActions'

export default TableActions
