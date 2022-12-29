import { FC, memo, useEffect } from 'react'
import { defaultProps, Props } from './Modal.types'
import * as styles from './Modal.styles'
import { CSSTransition } from 'react-transition-group'
import ConditionalWrapper from '../ConditionalWrapper'
import { createPortal } from 'react-dom'
import Headline from '../Headline'
import Icon from '../Icon'
import isFunction from 'lodash/isFunction'

export const Modal: FC<Props> = memo((props) => {
    const { appRoot, onClose, className, id, title, renderBody, renderFooter, portalTarget, show, closeButton, onExit, onExited, onEnter, onEntered } = {
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
                            <div css={styles.header}>
                                <Headline css={styles.headline} type='h4'>
                                    {title}
                                </Headline>

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
                            </div>
                            {renderBody && <div css={styles.content}>{isFunction(renderBody) ? renderBody() : renderBody}</div>}
                            {renderFooter && <div css={styles.footer}>{isFunction(renderFooter) ? renderFooter() : renderFooter}</div>}
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
