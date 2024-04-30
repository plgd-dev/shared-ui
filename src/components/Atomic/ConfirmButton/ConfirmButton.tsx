import { FC, useState } from 'react'
import ConfirmModal from '../ConfirmModal'
import Button from '../Button'
import { defaultProps, Props } from './ConfirmButton.types'

const ConfirmButton: FC<Props> = (props) => {
    const { onConfirm, children, confirmButtonText, cancelButtonText, title, body, loading, closeOnConfirm, modalProps, ...rest } = {
        ...defaultProps,
        ...props,
    }
    const [show, setShow] = useState(false)

    const onConfirmClick = (onClose: () => void) => {
        onConfirm(onClose)

        if (closeOnConfirm) {
            setShow(false)
        }
    }

    return (
        <>
            <Button {...rest} loading={loading} onClick={() => setShow(true)}>
                {children}
            </Button>
            <ConfirmModal
                {...modalProps}
                body={body}
                cancelButtonText={cancelButtonText}
                confirmButtonText={confirmButtonText}
                loading={loading}
                onClose={() => setShow(false)}
                onConfirm={onConfirmClick}
                show={show}
                title={title}
            />
        </>
    )
}

ConfirmButton.displayName = 'ConfirmButton'

export default ConfirmButton
