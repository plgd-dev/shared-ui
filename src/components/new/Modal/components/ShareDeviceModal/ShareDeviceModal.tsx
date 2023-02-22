import { FC, useEffect, useRef, useState } from 'react'
import { Props, defaultProps, AlreadySharedItemType, Inputs } from './ShareDeviceModal.types'
import Modal from '../../Modal'
import * as styles from './ShareDeviceModal.styles'
import FormGroup from '../../../FormGroup'
import FormLabel from '../../../FormLabel'
import FormInput from '../../../FormInput'
import Button from '../../../Button'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm, SubmitHandler } from 'react-hook-form'

const SharedItem = (sharedItem: AlreadySharedItemType & { onRemoveShared: (id: string) => void }) => (
    <div css={styles.sharedItem}>
        <div css={styles.left}>
            <div css={styles.image}>
                <img src={sharedItem.image} alt={sharedItem.name} />
            </div>
            <div css={styles.data}>
                <div css={styles.name}>{sharedItem.name}</div>
                <div css={styles.email}>{sharedItem.email}</div>
            </div>
        </div>
        <div css={styles.right}>
            <a
                href='#'
                css={styles.removeBtn}
                onClick={(e) => {
                    e.preventDefault()
                    sharedItem.onRemoveShared(sharedItem.email)
                }}
            >
                Remove
            </a>
        </div>
    </div>
)

const ShareDeviceModal: FC<Props> = (props) => {
    const { alreadyShared, onAddShared, onRemoveShared, ...rest } = { ...defaultProps, ...props }
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<Inputs>({
        mode: 'all',
    })
    const onSubmit: SubmitHandler<Inputs> = (data) => handleAdd(data)
    const inputRef = useRef(null)

    const handleAdd = (data: Inputs) => {
        onAddShared({
            name: 'TMP NAME',
            email: data.Email,
            image: 'https://placekitten.com/40/40',
        })
        setValue('Email', '')
    }

    useEffect(() => {
        // @ts-ignore
        !errors.Email && inputRef.current?.focus()
    }, [])

    const renderBody = () => (
        <div css={styles.body}>
            <h3 css={styles.headline}>Share device with</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup id='share-email' error={errors.Email ? 'Email format error' : undefined}>
                    <FormLabel text='E-mail address' />
                    <FormInput
                        placeholder='E-mail address'
                        inputRef={inputRef}
                        {...register('Email', { pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i })}
                    />
                    <Button variant='primary' htmlType='submit' disabled={!!errors.Email}>
                        Send invite
                    </Button>
                </FormGroup>
            </form>

            {alreadyShared && (
                <div css={styles.alreadyShared}>
                    <h3 css={styles.headline}>Already shared with</h3>
                    <AnimatePresence>
                        {alreadyShared.map((sharedItem, key) => (
                            <motion.div
                                key={key}
                                layout
                                initial={{ scale: 0.4, opacity: 0, y: 50 }}
                                exit={{
                                    scale: 0,
                                    opacity: 0,
                                    transition: { duration: 0.2 },
                                }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                            >
                                <motion.article
                                    variants={{
                                        open: {
                                            y: 0,
                                            opacity: 1,
                                            transition: {
                                                y: { stiffness: 1000, velocity: -100 },
                                            },
                                        },
                                        closed: {
                                            y: 50,
                                            opacity: 0,
                                            transition: {
                                                y: { stiffness: 1000 },
                                            },
                                        },
                                    }}
                                >
                                    <SharedItem key={key} {...sharedItem} onRemoveShared={onRemoveShared} />
                                </motion.article>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    )
    return <Modal {...rest} appRoot={document.getElementById('root')} portalTarget={document.getElementById('modal-root')} renderBody={renderBody} />
}

ShareDeviceModal.displayName = 'ShareDeviceModal'
ShareDeviceModal.defaultProps = defaultProps

export default ShareDeviceModal
