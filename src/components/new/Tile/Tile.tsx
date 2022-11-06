import { cloneElement, FC, memo, ReactElement } from 'react'
import { Props } from './Tile.types'
import * as styles from './Tile.styles'

const Tile: FC<Props> = memo((props) => {
    const { className, headline, children, tags, right } = props
    return (
        <div className={className} css={styles.tile}>
            <div css={styles.left}>
                <div css={styles.headline}>{headline}</div>
                {children && <div css={styles.content}>{children}</div>}
                {tags && <div css={styles.tags}>{tags.map((tag) => cloneElement(tag as ReactElement, { className: 'tag' }))}</div>}
            </div>
            {right}
        </div>
    )
})

Tile.displayName = 'Tile'

export default Tile
