import { FC } from 'react'
import { Props } from './NotFoundPage.types'
import PageLayout from '../../Atomic/PageLayout'
import * as styles from './NotFoundPage.styles'
import ConditionalWrapper from '../../Atomic/ConditionalWrapper'

const NotFoundPage: FC<Props> = ({ title, message, layout } = { layout: true }) => (
    <ConditionalWrapper
        condition={layout}
        wrapper={(child) => (
            <PageLayout notFound={true} title=''>
                {child}
            </PageLayout>
        )}
    >
        <h2 css={styles.title}>{title}</h2>
        <div css={styles.message}>{message}</div>
    </ConditionalWrapper>
)

NotFoundPage.displayName = 'NotFoundPage'

export default NotFoundPage
