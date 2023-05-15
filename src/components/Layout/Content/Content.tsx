import { FC, memo, useMemo } from 'react'
import { Props } from './Content.types'
import * as styles from './Content.styles'
import Headline from '../../Atomic/Headline'
import Button from '../../Atomic/Button'
import { Icon } from '../../Atomic/Icon'

type ContentHeaderProps = {
    headerProps: Omit<Props, 'children'>
}

const ContentHeader: FC<ContentHeaderProps> = memo((props) => {
    const { headline, headlineStatusTag, actions } = props.headerProps
    return (
        <div css={styles.header}>
            <div css={styles.left}>
                <Headline css={styles.headline} type='h4'>
                    {headline}
                </Headline>
                {headlineStatusTag && <div css={styles.statusTag}>{headlineStatusTag}</div>}
            </div>
            {actions && (
                <ul css={styles.rightActions}>
                    {actions.map((action, key) => (
                        <li css={styles.rightAction} key={key}>
                            <Button icon={<Icon icon={action.icon} />} onClick={action.onClick} variant={action.variant}>
                                {action.text}
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
})

const Content: FC<Props> = (props) => {
    const { actions, headline, headlineStatusTag, children } = props
    const headerProps = useMemo(() => ({ actions, headline, headlineStatusTag }), [actions, headline, headlineStatusTag])

    return (
        <div css={styles.content}>
            <ContentHeader headerProps={headerProps} />
            {children}
        </div>
    )
}

Content.displayName = 'Content'

export default Content
