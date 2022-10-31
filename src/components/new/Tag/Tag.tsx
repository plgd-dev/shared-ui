import { FC } from 'react'
import { Props } from './Tag.types'
import * as styles from './Tag.styles'
import { Icon } from '../Icon'

const Tag: FC<Props> = (props) => {
    const { children, icon, onClick } = props
    return (
        <div css={styles.tag} onClick={onClick}>
            {icon && <Icon css={styles.icon} icon={icon} />}
            {children}
        </div>
    )
}

Tag.displayName = 'Tag'

export default Tag
