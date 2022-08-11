import { FC, useState } from 'react'
import ConfirmModal from '../ConfirmModal'
import Button from '../Button'
import { defaultProps, Props } from './ConfirmButton.types'

const ConfirmButton: FC<Props> = (props) => {
    const { onConfirm, children, confirmButtonText, cancelButtonText, title, body, loading, closeOnConfirm, modalProps, ...rest } = props
    const [show, setShow] = useState(false)

    const onConfirmClick = (onClose: () => void) => {
        onConfirm(onClose)

        if (closeOnConfirm) {
            setShow(false)
        }
    }

    return (
        <>
            <Button {...rest} loading={loading} onClick={(e) => setShow(true)}>
                {children}
            </Button>
            <ConfirmModal
                {...modalProps}
                show={show}
                onClose={() => setShow(false)}
                title={title}
                body={body}
                loading={loading}
                cancelButtonText={cancelButtonText}
                confirmButtonText={confirmButtonText}
                onConfirm={onConfirmClick}
            />
        </>
    )
}

ConfirmButton.displayName = 'ConfirmButton'
ConfirmButton.defaultProps = defaultProps

export default ConfirmButton
