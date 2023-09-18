import { ToastContainer as Toastr } from 'react-toastify'
import { createPortal } from 'react-dom'

import { MAX_NUMBER_OF_VISIBLE_TOASTS, TOAST_HIDE_TIME } from './constants'
import { Props } from './ToastContainer.types'
import * as styles from './ToastContainer.styles'

const ToastContainer = (props: Props) => {
    const { portalTarget, showNotifications } = props

    const container = (
        <Toastr
            hideProgressBar
            newestOnTop
            autoClose={TOAST_HIDE_TIME}
            css={styles.test}
            icon={false}
            limit={MAX_NUMBER_OF_VISIBLE_TOASTS}
            pauseOnFocusLoss={false}
            style={{ display: showNotifications ? 'block' : 'none' }}
        />
    )

    if (portalTarget) {
        return createPortal(container, portalTarget as Element)
    }

    return container
}

export default ToastContainer
