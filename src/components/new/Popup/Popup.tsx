import { FC } from 'react'
import { Props } from './Popup.types'
import * as styles from './Popup.styles'
import { ReactComponent as IconPattern } from './assets/Pattern.svg'
import { ReactComponent as IconLogo } from './assets/Logo.svg'

const Popup: FC<Props> = (props) => {
    const { headline, description, formNode, right } = props
    return (
        <div css={styles.popup}>
            <div css={[styles.content, right && styles.doublePanels]}>
                <div css={styles.top}>
                    <div css={styles.logo}>
                        <IconLogo />
                    </div>
                    <div css={styles.boxWrapper}>
                        <div css={styles.form}>
                            <h1 css={styles.h1}>{headline}</h1>
                            <div css={styles.description}>{description}</div>
                            {formNode}
                        </div>
                        {right && (
                            <div css={styles.formRight}>
                                <h2 css={styles.headlineRight}>{right.headline}</h2>
                                <div css={styles.textRight}>{right.text}</div>
                            </div>
                        )}
                    </div>
                </div>
                <div css={styles.bottom}>All Rights Reserved © 2020-{new Date().getFullYear()} plgd.dev, s.r.o.</div>
            </div>
            <div css={styles.pattern}>
                <IconPattern />
            </div>
        </div>
    )
}

Popup.displayName = 'Popup'

export default Popup
