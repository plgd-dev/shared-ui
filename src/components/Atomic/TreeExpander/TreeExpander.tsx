import classNames from 'classnames'
import { FC } from 'react'
import { Props } from './TreeExpander.types'

const TreeExpander: FC<Props> = ({ expanded, ...rest }) => (
    <div {...rest} className={classNames('tree-expander', { expanded })}>
        <i
            className={classNames('fas', {
                'fa-chevron-down': expanded,
                'fa-chevron-right': !expanded,
            })}
        />
    </div>
)

TreeExpander.displayName = 'TreeExpander'

export default TreeExpander
