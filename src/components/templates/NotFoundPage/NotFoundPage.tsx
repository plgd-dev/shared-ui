import { FC } from 'react'
import { Props } from './NotFoundPage.types'
import PageLayout from '../../../components/new/PageLayout'
import * as styles from './NotFoundPage.styles'

const NotFoundPage: FC<Props> = ({ title, message }) => (
    <PageLayout title=''>
        <h2 css={styles.title}>{title}</h2>
        <div css={styles.message}>{message}</div>
    </PageLayout>
)

NotFoundPage.displayName = 'NotFoundPage'

export default NotFoundPage
