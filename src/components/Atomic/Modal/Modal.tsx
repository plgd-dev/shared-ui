import React, { FC, memo, useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import isFunction from 'lodash/isFunction'
import classNames from 'classnames'

import { defaultProps, Props } from './Modal.types'
import * as styles from './Modal.styles'
import Headline from '../Headline'
import { convertSize, IconCloseCircle } from '../Icon'
import Button from '../Button'
import Backdrop from './Backdrop'

const dropIn = {
    hidden: {
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
        opacity: 0,
    },
}

export const Modal: FC<Props> = memo((props) => {
    const {
        appRoot,
        bodyStyle,
        className,
        closeButton,
        closeButtonText,
        closeOnBackdrop,
        closeOnEsc,
        contentPadding,
        dataTestId,
        footerActions,
        fullSize,
        fullSizeButtons,
        id,
        maxHeight,
        maxWidth,
        maxWidthTitle,
        minWidth,
        onClose,
        portalTarget,
        renderBody,
        renderFooter,
        renderHeader,
        show,
        subTitle,
        title,
        width,
        zIndex,
    } = {
        ...defaultProps,
        ...props,
    }

    useEffect(() => {
        if (appRoot && show) {
            // @ts-ignore
            appRoot.style.filter = `blur(${show ? 6 : 0}px)`
            // @ts-ignore
            appRoot.style.overflow = `hidden`

            return () => {
                // @ts-ignore
                appRoot.style.filter = `none`
                // @ts-ignore
                appRoot.style.overflow = 'unset'
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
                <div>
                    <Headline css={[(theme) => styles.headline(theme, maxWidthTitle)]} type='h4'>
                        {title}
                    </Headline>
                    {subTitle && <div css={styles.subTitle}>{subTitle}</div>}
                </div>

                {closeButton && (
                    <a
                        css={styles.close}
                        data-test-id={dataTestId?.concat('-close')}
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

    const ModalBase = (
        <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
            {show && (
                <Backdrop onClick={() => isFunction(onClose) && closeOnBackdrop && onClose()} zIndex={zIndex}>
                    <motion.div
                        animate='visible'
                        className={classNames(className, fullSize && 'fullSize')}
                        css={[styles.modalWrapper, fullSize && styles.fullSize]}
                        data-test-id={dataTestId}
                        id={id}
                        initial='hidden'
                        onClick={(e) => e.stopPropagation()}
                        role='dialog'
                        style={{ width }}
                        variants={dropIn}
                    >
                        <div css={[(theme) => styles.modal(theme, minWidth, maxWidth, maxHeight), fullSize && styles.fullSize]} style={{ width }}>
                            <Header />
                            {renderBody && (
                                <div css={[styles.content, contentPadding && styles.contentPadding]} style={bodyStyle}>
                                    {isFunction(renderBody) ? renderBody() : renderBody}
                                </div>
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

export default Modal
