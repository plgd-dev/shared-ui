import { FC, useEffect, useRef } from 'react'
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
                <img alt={sharedItem.name} src={sharedItem.image} />
            </div>
            <div css={styles.data}>
                <div css={styles.name}>{sharedItem.name}</div>
                <div css={styles.email}>{sharedItem.email}</div>
            </div>
        </div>
        <div css={styles.right}>
            <a
                css={styles.removeBtn}
                href='#'
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
                <FormGroup error={errors.Email ? 'Email format error' : undefined} id='share-email'>
                    <FormLabel text='E-mail address' />
                    <FormInput
                        inputRef={inputRef}
                        placeholder='E-mail address'
                        {...register('Email', { pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i })}
                    />
                    <Button disabled={!!errors.Email} htmlType='submit' variant='primary'>
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
                                layout
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{
                                    scale: 0,
                                    opacity: 0,
                                    transition: { duration: 0.2 },
                                }}
                                initial={{ scale: 0.4, opacity: 0, y: 50 }}
                                key={key}
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
