import { FC } from 'react'
import { Props } from './UserWidget.types'
import * as styles from './UserWidget.styles'
import Avatar from 'react-avatar'

const UserWidget: FC<Props> = (props) => {
    const { name, description, image } = props
    return (
        <div css={styles.userWidget}>
            {image && <div css={styles.image}>{image}</div>}
            {!image && (
                <div css={styles.image}>
                    <Avatar name={name} size='44' round='50%' color='#255897' />
                </div>
            )}
            <div>
                <div css={styles.name}>{name}</div>
                {description && <div css={styles.description}>{description}</div>}
            </div>
        </div>
    )
}

UserWidget.displayName = 'UserWidget'

export default UserWidget
