import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Props } from './App.types'

const App = (props: Props) => (
    <>
        {props.children}
        <ToastContainer newestOnTop={true} />
    </>
)

App.displayName = 'App'

export default App
