import { cloneElement, FC, memo, ReactElement } from 'react'
import { Props } from './TableActions.types'
import * as styles from './TableActions.styles'
import Tooltip, { FloatingDelayGroup } from '../../Tooltip'
import Icon, { convertSize } from '../../Icon'

const TableActions: FC<Props> = memo((props) => {
    const { className, id, items } = props
    return (
        <div className={className} id={id}>
            <FloatingDelayGroup delay={200}>
                <div css={styles.actionItems}>
                    {items
                        .filter((item) => !item.hidden)
                        .map((item, key) => (
                            <div css={styles.actionItem} key={key}>
                                <Tooltip
                                    content={item.tooltipText}
                                    id={item.id}
                                    portalTarget={document.getElementById('modal-root') as HTMLDivElement}
                                    variant='default'
                                >
                                    {typeof item.icon === 'string' ? (
                                        <Icon css={styles.icon} icon={item.icon} onClick={item.onClick} size={item.size || 20} />
                                    ) : (
                                        cloneElement(item.icon as ReactElement, { onClick: item.onClick, ...convertSize(item.size || 20), css: styles.icon })
                                    )}
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
