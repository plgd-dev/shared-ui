import { FC, memo } from 'react'
import { Props } from './Footer.types'
import * as styles from './Footer.styles'

const Footer: FC<Props> = memo((props) => {
    const { versionComponent, paginationComponent } = props
    return (
        <div css={styles.footer}>
            <div>{versionComponent}</div>
            <div>{paginationComponent}</div>
        </div>
    )
})

Footer.displayName = 'Footer'

export default Footer
