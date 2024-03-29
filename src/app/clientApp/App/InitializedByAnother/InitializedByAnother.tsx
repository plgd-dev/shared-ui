import { FC } from 'react'
import { useIntl } from 'react-intl'

import Button from '../../../../components/Atomic/Button'
import { IconInfo } from '../../../../components/Atomic/Icon/components'
import { convertSize } from '../../../../components/Atomic/Icon'
import { Props } from './InitializedByAnother.types'
import { messages as t } from './InitializedByAnother.i18n'
import * as styles from './InitializedByAnother.styles'

const InitializedByAnother: FC<Props> = (props) => {
    const { description, show, logout } = props
    const { formatMessage: _ } = useIntl()

    if (!show) {
        return null
    }

    return (
        <div css={styles.initializedByAnother}>
            <div css={styles.infoBox}>
                <IconInfo {...convertSize(50)} />
                <h1 css={styles.headline}>{_(t.headline)}</h1>
                <div css={styles.description}>{description || _(t.description)}</div>
                {logout && (
                    <div css={styles.buttonWrapper}>
                        <Button onClick={logout}>{_(t.logout)}</Button>
                    </div>
                )}
            </div>
        </div>
    )
}

InitializedByAnother.displayName = 'InitializedByAnother'

export default InitializedByAnother
