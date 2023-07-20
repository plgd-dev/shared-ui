import { FC, useState } from 'react'
import { Props } from './Popup.types'
import * as styles from './Popup.styles'
import { convertSize, IconClose } from '../Icon'
import { CSSTransition } from 'react-transition-group'
import { Logo, Pattern, RightPattern } from './components'

const Popup: FC<Props> = (props) => {
    const { headline, description, formNode, right } = props
    const [showMobileBar, setShowMobileBar] = useState(false)
    const [mobileBar, setMobileBar] = useState(true)

    return (
        <div css={styles.popup}>
            <div css={[styles.content, right && styles.doublePanels]}>
                <div css={styles.top}>
                    <div css={styles.logo}>
                        <CSSTransition appear={true} classNames='item-blur' in={showMobileBar} timeout={0}>
                            <Logo css={styles.logoSvg} height={38} width={170} />
                        </CSSTransition>
                    </div>
                    <div css={styles.boxWrapper}>
                        <CSSTransition appear={true} classNames='item-blur' in={showMobileBar} timeout={0}>
                            <div css={styles.form}>
                                <h1 css={styles.h1}>{headline}</h1>
                                <div css={styles.description}>{description}</div>
                                {formNode}
                            </div>
                        </CSSTransition>
                        {right && mobileBar && (
                            <div css={styles.formRight} onClick={() => setShowMobileBar(!showMobileBar)}>
                                <div css={styles.rightInner}>
                                    <div css={styles.rightHeader}>
                                        <h2 css={styles.headlineRight}>{right.headline}</h2>
                                        <CSSTransition appear={true} classNames='item-icon' in={showMobileBar} timeout={0}>
                                            <IconClose
                                                {...convertSize(32)}
                                                css={styles.close}
                                                onClick={() => {
                                                    setShowMobileBar(false)
                                                    setMobileBar(false)
                                                }}
                                            />
                                        </CSSTransition>
                                    </div>
                                    <CSSTransition appear={true} classNames='item' in={showMobileBar} timeout={0}>
                                        <div css={styles.textRight}>
                                            <div css={styles.textRightInner}>{right.text}</div>
                                        </div>
                                    </CSSTransition>
                                    <div>
                                        <RightPattern css={styles.rightPattern} height={231} width={315} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div css={styles.bottom}>All Rights Reserved © 2020-{new Date().getFullYear()} plgd.dev, s.r.o.</div>
            </div>
            <div css={styles.pattern}>
                <Pattern height={745} width={1120} />
            </div>
            {showMobileBar && mobileBar && (
                <CSSTransition appear={true} classNames='item-icon' in={showMobileBar} timeout={0}>
                    <div css={styles.blur}></div>
                </CSSTransition>
            )}
        </div>
    )
}

Popup.displayName = 'Popup'

export default Popup
