import axios from 'axios'
import isFunction from 'lodash/isFunction'

import { security } from './security'
import { clientAppSettings } from './client-app-settings'
import { hasDifferentOwner } from './api-utils'
import { getApiUrl } from '../constants'

// Time needed to cancel the request
const CANCEL_REQUEST_DEADLINE_MS = 30000

export const errorCodes = {
    COMMAND_EXPIRED: 'CommandExpired',
    DEADLINE_EXCEEDED: 'DeadlineExceeded',
    INVALID_ARGUMENT: 'InvalidArgument',
    NO_TOKEN: 'EmptyToken',
    UNAUTHORIZED: 'Unauthorized',
    DIFFERENT_USER: 'Different user',
}

export const fetchApi = async (url, options = {}) => {
    const defaultOptions = {
        useToken: clientAppSettings ? clientAppSettings.getUseToken() : true,
    }
    const {
        scopes,
        body,
        useToken,
        unauthorizedCallback,
        cancelRequestDeadlineTimeout: cancelRequestDeadlineTimeoutDefault,
        ...fetchOptions
    } = {
        ...defaultOptions,
        ...options,
    }

    const accessToken = useToken ? security.getAccessToken() : null
    const cancelRequestDeadlineTimeout = cancelRequestDeadlineTimeoutDefault || CANCEL_REQUEST_DEADLINE_MS
    const requestUrl = getApiUrl(url)

    if (hasDifferentOwner()) {
        new Error(errorCodes.DIFFERENT_USER)
    }

    const oAuthSettings = {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
        },
    }

    if (useToken && !accessToken) {
        new Error(errorCodes.NO_TOKEN)
    }

    // Add the Authorization header to the existing headers
    if (useToken && accessToken) {
        oAuthSettings.headers.Authorization = `Bearer ${accessToken}`
    }

    // Cancel token source needed for cancelling the request
    const cancelTokenSource = axios.CancelToken.source()

    // We are returning a Promise because we want to be able to cancel the request after a certain time
    return new Promise((resolve, reject) => {
        // Timer for the request cancellation
        const deadlineTimer = setTimeout(() => {
            // Cancel the request over cancelRequestDeadlineTimeout
            cancelTokenSource.cancel(errorCodes.DEADLINE_EXCEEDED)
        }, cancelRequestDeadlineTimeout)

        axios({
            ...oAuthSettings,
            url: requestUrl,
            data: body,
            cancelToken: cancelTokenSource.token,
        })
            .then((response) => {
                clearTimeout(deadlineTimer)

                if (response.status === 401) {
                    isFunction(unauthorizedCallback) && unauthorizedCallback()
                    return reject(new Error(errorCodes.UNAUTHORIZED))
                } else {
                    return resolve(response)
                }
            })
            .catch((error) => {
                clearTimeout(deadlineTimer)

                if (error?.response?.status === 401) {
                    isFunction(unauthorizedCallback) && unauthorizedCallback()
                    return reject(new Error(errorCodes.UNAUTHORIZED))
                }

                // A middleware for checking if the error was caused by cancellation of the request, if so, throw a DeadlineExceeded error
                if (axios.isCancel(error)) {
                    return reject(new Error(errorCodes.DEADLINE_EXCEEDED))
                }

                // Rethrow the error
                return reject(error)
            })
    })
}
