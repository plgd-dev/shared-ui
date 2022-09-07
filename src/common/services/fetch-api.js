import axios from 'axios'

// Time needed to cancel the request
const CANCEL_REQUEST_DEADLINE_MS = 30000

export const errorCodes = {
    COMMAND_EXPIRED: 'CommandExpired',
    DEADLINE_EXCEEDED: 'DeadlineExceeded',
    INVALID_ARGUMENT: 'InvalidArgument',
}

export const fetchApi = async (url, options = {}) => {
    const { audience, scopes, body, ...fetchOptions } = options
    const oAuthSettings = {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
        },
    }
    // Cancel token source needed for cancelling the request
    const cancelTokenSource = axios.CancelToken.source()

    // We are returning a Promise because we want to be able to cancel the request after a certain time
    return new Promise((resolve, reject) => {
        // Timer for the request cancellation
        const deadlineTimer = setTimeout(() => {
            // Cancel the request over CANCEL_REQUEST_DEADLINE_MS
            cancelTokenSource.cancel()
        }, CANCEL_REQUEST_DEADLINE_MS)

        axios({
            ...oAuthSettings,
            url,
            data: body,
            cancelToken: cancelTokenSource.token,
        })
            .then((response) => {
                clearTimeout(deadlineTimer)
                return resolve(response)
            })
            .catch((error) => {
                clearTimeout(deadlineTimer)

                // A middleware for checking if the error was caused by cancellation of the request, if so, throw a DeadlineExceeded error
                if (axios.isCancel(error)) {
                    return reject(new Error(errorCodes.DEADLINE_EXCEEDED))
                }

                // Rethrow the error
                return reject(error)
            })
    })
}
