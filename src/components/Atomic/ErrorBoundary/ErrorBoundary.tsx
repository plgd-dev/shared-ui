import React from 'react'
import isFunction from 'lodash/isFunction'

type Props = {
    logErrorToMyService?: (error: any, errorInfo: any) => void
    children: React.ReactNode
}

type State = {
    hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        if (isFunction(this.props.logErrorToMyService)) {
            this.props.logErrorToMyService(error, errorInfo)
        } else {
            console.log('ERROR')
            console.log(error)
            console.log(errorInfo)
        }
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary
