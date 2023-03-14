import React, { FC, memo, useCallback, useEffect } from 'react'
import { defaultProps, Props } from './Modal.types'
import * as styles from './Modal.styles'
import { createPortal } from 'react-dom'
import Headline from '../Headline'
import Icon from '../Icon'
import isFunction from 'lodash/isFunction'
import Button from '../Button'
import { AnimatePresence, motion } from 'framer-motion'
import Backdrop from './Backdrop'

export const Modal: FC<Props> = memo((props) => {
    const { appRoot, onClose, className, footerActions, id, title, renderBody, renderHeader, renderFooter, portalTarget, show, closeButton, closeButtonText } =
        {
            ...defaultProps,
            ...props,
        }

    useEffect(() => {
        if (appRoot && show) {
            // @ts-ignore
            appRoot.style.filter = `blur(${show ? 6 : 0}px)`

            return () => {
                // @ts-ignore
                appRoot.style.filter = `none`
            }
        }
    }, [show, appRoot])

    const escFunction = useCallback((event: KeyboardEvent) => {
        event.key === 'Escape' && isFunction(onClose) && onClose()
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', escFunction, false)

        return () => {
            document.removeEventListener('keydown', escFunction, false)
        }
    }, [escFunction])

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
                        <span>{closeButtonText}</span> <Icon icon='close-circle' size={26} />
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
                    {footerActions.map((action, key) => (
                        <Button key={key} className='modal-button' onClick={action.onClick} disabled={action.disabled} variant={action.variant}>
                            {action.label}
                        </Button>
                    ))}
                </div>
            )
        }

        return null
    }

    const dropIn = {
        hidden: {
            y: '-150px',
            opacity: 0,
        },
        visible: {
            y: '0',
            opacity: 1,
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            },
        },
        exit: {
            y: '-150px',
            opacity: 0,
        },
    }

    const ModalBase = (
        <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
            {show && (
                <Backdrop onClick={() => isFunction(onClose) && onClose()}>
                    <motion.div className={className} id={id} onClick={(e) => e.stopPropagation()} variants={dropIn} initial='hidden' animate='visible'>
                        <div css={styles.modal}>
                            <Header />
                            {renderBody && <div css={styles.content}>{isFunction(renderBody) ? renderBody() : renderBody}</div>}
                            {(renderFooter || footerActions) && (
                                <div css={styles.footer}>
                                    <Footer />
                                </div>
                            )}
                        </div>
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    )

    if (portalTarget) {
        return createPortal(ModalBase, portalTarget as Element)
    }

    return ModalBase
})

Modal.displayName = 'Modal'
Modal.defaultProps = defaultProps

export default Modal
