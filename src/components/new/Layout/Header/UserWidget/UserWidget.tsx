import { FC } from 'react'
import { Props } from './UserWidget.types'
import * as styles from './UserWidget.styles'

const UserWidget: FC<Props> = (props) => {
    const { name, description, image } = props
    return (
        <div css={styles.userWidget}>
            {image && <div css={styles.image}>{image}</div>}
            <div>
                <div css={styles.name}>{name}</div>
                {description && <div css={styles.description}>{description}</div>}
            </div>
        </div>
    )
}

UserWidget.displayName = 'UserWidget'

export default UserWidget
