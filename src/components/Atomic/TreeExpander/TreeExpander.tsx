import { FC } from 'react'
import { Props } from './TreeExpander.types'
import { IconTableArrowDown } from '../Icon'
import * as styles from './TreeExpander.styles'

const TreeExpander: FC<Props> = ({ expanded, dataTestId, ...rest }) => (
    <div {...rest} css={styles.treeExpander} data-test-id={dataTestId?.concat('-expander')}>
        <IconTableArrowDown className='expander-icon' css={[styles.expanderIcon, expanded && styles.expanded]} height={4} width={7} />
    </div>
)

TreeExpander.displayName = 'TreeExpander'

export default TreeExpander
