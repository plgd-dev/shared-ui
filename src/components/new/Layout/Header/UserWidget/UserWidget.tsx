import { FC } from 'react'
import { Props } from './UserWidget.types'
import * as styles from './UserWidget.styles'
import Avatar from 'react-avatar'

const UserWidget: FC<Props> = (props) => {
    const { name, description, image } = props
    return (
        <div css={styles.userWidget}>
            {image && <div css={styles.image}>{typeof image === 'string' ? <img alt={name} src={image} /> : image}</div>}
            {!image && (
                <div css={styles.image}>
                    <Avatar color='#255897' name={name} round='50%' size='44' />
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
