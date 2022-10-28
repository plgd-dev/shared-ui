import { FC } from 'react'
import { Props } from './InitializedByDifferentUser.types'
import * as styles from './InitializedByDifferentUser.styles'

// assets
import { Background, Header, Logo } from './components'
import Button from '../../Button'

const InitializedByDifferentUser: FC<Props> = (props) => {
    return (
        <div css={styles.cover}>
            <div css={styles.background}>
                <Background height={830} width={1440} />
            </div>
            <div css={styles.blur} />
            <div css={styles.rectangle}>
                <Header css={styles.responsiveSvg} height={674} width={1440} />
            </div>
            <main css={styles.main}>
                <div css={styles.container}>
                    <div>
                        <Logo height={38} width={170} />
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
