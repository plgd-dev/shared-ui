import { FC } from 'react'
import { Props } from './Content.types'
import * as styles from './Content.styles'
import Headline from '../../Headline'

const Content: FC<Props> = (props) => {
    const { actions, headline } = props
    return (
        <div css={styles.content}>
            <div css={styles.header}>
                <div css={styles.left}>
                    <Headline css={styles.headline} type='h4'>
                        {headline}
                    </Headline>
                </div>
                {actions && (
                    <ul css={styles.rightActions}>
                        {actions.map((action, key) => (
                            <li css={styles.rightAction} key={key}>
                                {action}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

Content.displayName = 'Content'

export default Content
