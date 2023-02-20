import React, { FC, memo, ReactElement, useEffect } from 'react'
import { defaultProps, Props } from './Modal.types'
import * as styles from './Modal.styles'
import { CSSTransition } from 'react-transition-group'
import ConditionalWrapper from '../ConditionalWrapper'
import { createPortal } from 'react-dom'
import Headline from '../Headline'
import Icon from '../Icon'
import isFunction from 'lodash/isFunction'
import Button from '../Button'

export const Modal: FC<Props> = memo((props) => {
    const {
        appRoot,
        onClose,
        className,
        footerActions,
        id,
        title,
        renderBody,
        renderHeader,
        renderFooter,
        portalTarget,
        show,
        closeButton,
        onExit,
        onExited,
        onEnter,
        onEntered,
    } = {
        ...defaultProps,
        ...props,
    }

    useEffect(() => {
        if (appRoot) {
            // @ts-ignore
            appRoot.style.filter = `blur(${show ? 6 : 0}px)`

            return () => {
                // @ts-ignore
                appRoot.style.filter = `blur(0px)`
            }
        }
    }, [show, appRoot])

    const Header: () => any = () => {
        if (renderHeader) {
            return isFunction(renderHeader) ? renderHeader() : renderHeader
        }
        return (
            <div css={styles.header}>
                <Headline css={styles.headline} type='h4'>
                    {title}
                </Headline>

                {closeButton && (
                    <a
                        css={styles.close}
                        href='#'
                        onClick={(e) => {
                            e.stopPropagation()
                            e.preventDefault()
                            isFunction(onClose) && onClose()
                        }}
                    >
                        <span>Close</span> <Icon icon='close-circle' size={26} />
                    </a>
                )}
            </div>
        )
    }

    const Footer: () => any = () => {
        if (renderFooter) {
            return isFunction(renderFooter) ? renderFooter() : renderFooter
        } else if (footerActions) {
            return (
                <div className='modal-buttons'>
                    {footerActions.map((action) => (
                        <Button className='modal-button' onClick={action.onClick} disabled={action.disabled} variant={action.variant}>
                            {action.label}
                        </Button>
                    ))}
                </div>
            )
        }

        return null
    }

    return (
        <CSSTransition
            unmountOnExit
            appear={true}
            classNames='modal'
            in={show}
            onEnter={onEnter || undefined}
            onEntered={onEntered || undefined}
            onExit={onExit || undefined}
            onExited={onExited || undefined}
            timeout={300}
        >
            <ConditionalWrapper condition={!!portalTarget} wrapper={(c) => createPortal(c, portalTarget as Element)}>
                <div className={className} css={styles.modalCore} id={id}>
                    <div className='modal' css={styles.modal}>
                        <div css={styles.inner}>
                            <Header />
                            {renderBody && <div css={styles.content}>{isFunction(renderBody) ? renderBody() : renderBody}</div>}
                            <div css={styles.footer}>
                                <Footer />
                            </div>
                        </div>
                    </div>
                    <div className='drop-shadow' css={styles.modalDrop}></div>
                </div>
            </ConditionalWrapper>
        </CSSTransition>
    )
})

Modal.displayName = 'Modal'
Modal.defaultProps = defaultProps

export default Modal
