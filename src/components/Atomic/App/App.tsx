import React from 'react'
import { Global } from '@emotion/react'
import 'react-toastify/dist/ReactToastify.css'

import { Props, defaultProps } from './App.types'
import { ToastContainer } from '../Notification'
import * as styles from './App.styles'

const App = (props: Props) => {
    const { toastContainerPortalTarget, globalStyle } = { ...defaultProps, ...props }
    return (
        <>
            <Global styles={[globalStyle && styles.global]} />
            <ToastContainer portalTarget={toastContainerPortalTarget} showNotifications={true} />
            {props.children}
        </>
    )
}

App.displayName = 'App'

export default App
