import React, { FC, memo, useCallback, useEffect } from 'react'
import { defaultProps, Props } from './Modal.types'
import * as styles from './Modal.styles'
import { createPortal } from 'react-dom'
import Headline from '../Headline'
import { convertSize, IconCloseCircle } from '../Icon'
import isFunction from 'lodash/isFunction'
import Button from '../Button'
import { AnimatePresence, motion } from 'framer-motion'
import Backdrop from './Backdrop'

export const Modal: FC<Props> = memo((props) => {
    const {
        appRoot,
        className,
        closeButton,
        closeButtonText,
        closeOnBackdrop,
        closeOnEsc,
        contentPadding,
        dataTestId,
        footerActions,
        fullSizeButtons,
        id,
        maxWidth,
        maxWidthTitle,
        minWidth,
        onClose,
        portalTarget,
        renderBody,
        renderFooter,
        renderHeader,
        show,
        title,
    } = {
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

    const escFunction = useCallback(
        (event: KeyboardEvent) => {
            event.key === 'Escape' && closeOnEsc && isFunction(onClose) && onClose()
        },
        [onClose, closeOnEsc]
    )

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
                <Headline css={styles.headline(maxWidthTitle)} type='h4'>
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
                        <span>{closeButtonText}</span> <IconCloseCircle {...convertSize(26)} />
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
                <div className='modal-buttons' css={[fullSizeButtons && styles.fullSizeButtons]}>
                    {footerActions.map((action, key) => (
                        <Button
                            className='modal-button'
                            dataTestId={action.dataTestId}
                            disabled={action.disabled}
                            key={key}
                            onClick={action.onClick}
                            variant={action.variant}
                        >
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
                <Backdrop onClick={() => isFunction(onClose) && closeOnBackdrop && onClose()}>
                    <motion.div
                        animate='visible'
                        className={className}
                        css={styles.modalWrapper}
                        data-test-id={dataTestId}
                        id={id}
                        initial='hidden'
                        onClick={(e) => e.stopPropagation()}
                        variants={dropIn}
                    >
                        <div css={styles.modal(minWidth, maxWidth)}>
                            <Header />
                            {renderBody && (
                                <div css={[styles.content, contentPadding && styles.contentPadding]}>{isFunction(renderBody) ? renderBody() : renderBody}</div>
                            )}
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
