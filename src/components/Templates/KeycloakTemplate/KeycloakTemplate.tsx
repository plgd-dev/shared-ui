import React, { FC } from 'react'
import * as styles from './KeycloakTemplate.styles'
import { Props } from './KeycloakTemplate.types'
import { Steps } from '../Steps'

// assets
import { LeftBar, Logo, IconClose, Warning, MobileLogo } from './components'

const KeycloakTemplate: FC<Props> = (props) => {
    const { leftCenterNode, leftBottomNode, formNode, headline, description, displayMessage, message, steps, activeStep, isAppInitiatedAction } = props
    return (
        <div css={styles.TemplateContainer}>
            <div css={styles.TemplateLeftCol}>
                <div className='top'>
                    <Logo height={32} width={140} />
                </div>
                {leftCenterNode && <div css={styles.leftCenter}>{leftCenterNode}</div>}
                {leftBottomNode && <div css={styles.leftBottomNode}>{leftBottomNode}</div>}
                <div css={styles.leftBarBg}>
                    <LeftBar css={styles.responsiveSvg} height={435} width={537} />
                </div>
            </div>
            <div css={styles.TemplateRightCol}>
                <div css={styles.rightHeader}>
                    {steps && (
                        <div css={styles.headerSteps}>
                            <Steps active={activeStep || 0} steps={steps} />
                        </div>
                    )}
                    <a css={styles.rightMobileLogoLink} href='#'>
                        <MobileLogo height={32} width={140} />
                    </a>
                    <a
                        css={styles.close}
                        href='#'
                        onClick={(e) => {
                            e.preventDefault()
                            window.location.replace('https://plgd.dev')
                        }}
                    >
                        Close
                        <span className='icon'>
                            <IconClose height={32} width={32} />
                        </span>
                    </a>
                </div>
                <div css={styles.rightContent}>
                    <div css={styles.centeredBox}>
                        {/* {steps && (*/}
                        {/*    <div css={styles.contentSteps}>*/}
                        {/*        <Steps active={activeStep || 0} steps={steps} />*/}
                        {/*    </div>*/}
                        {/* )}*/}
                        <h1 css={styles.mainHeadline}>{headline}</h1>
                        <div css={styles.description}>{description}</div>
                        {displayMessage && message !== undefined && (message.type !== 'warning' || !isAppInitiatedAction) && (
                            <div css={styles.message(message.type)}>
                                {/* {message.type === 'success' && <span className={clsx(props.kcFeedbackSuccessIcon)}></span>}*/}
                                {message.type === 'warning' && <Warning height={24} width={24} />}
                                {/* {message.type === 'error' && <span className={clsx(props.kcFeedbackErrorIcon)}></span>}*/}
                                {/* {message.type === 'info' && <span className={clsx(props.kcFeedbackInfoIcon)}></span>}*/}
                                <span
                                    css={styles.messageText}
                                    dangerouslySetInnerHTML={{
                                        __html: message.summary,
                                    }}
                                />
                            </div>
                        )}
                        {formNode}
                    </div>
                </div>
            </div>
        </div>
    )
}

KeycloakTemplate.displayName = 'KeycloakTemplate'

export default KeycloakTemplate
