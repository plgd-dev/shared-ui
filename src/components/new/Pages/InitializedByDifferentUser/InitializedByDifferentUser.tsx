import { FC } from 'react'
import { Props } from './InitializedByDifferentUser.types'
import * as styles from './InitializedByDifferentUser.styles'

// assets
import { ReactComponent as IconLogo } from './assets/logo.svg'
import { ReactComponent as Rectangle } from './assets/rectangle.svg'
import { ReactComponent as Blur } from './assets/background.svg'
import { ReactComponent as Man } from './assets/man.svg'
import Button from '@plgd/shared-ui/src/components/new/Button'

const InitializedByDifferentUser: FC<Props> = (props) => {
    return (
        <div css={styles.cover}>
            <Blur css={styles.background} />
            <div css={styles.blur} />
            <Rectangle css={styles.rectangle} />
            <Man css={styles.man} />
            <main css={styles.main}>
                <div css={styles.container}>
                    <div>
                        <IconLogo />
                    </div>
                    <div css={styles.content}>
                        <h1 css={styles.headline}>
                            Application is initialize by a <span>different user</span>
                        </h1>
                        <div css={styles.description}>Description line here...</div>
                        <Button variant='primary'>Log out</Button>
                    </div>
                </div>
            </main>
        </div>
    )
}

InitializedByDifferentUser.displayName = 'InitializedByDifferentUser'

export default InitializedByDifferentUser
