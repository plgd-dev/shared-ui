import { parseStreamedData } from '../utils'
import { security } from './security'

export const streamApi = async (url, options = {}) => {
    const { audience, scopes, body, parseResult, useToken: useTokenDefault, unauthorizedCallback, ...fetchOptions } = options
    const useToken = useTokenDefault !== false
    const accessToken = useToken ? security.getAccessToken() : null

    const oAuthSettings = {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
        },
    }

    // Add the Authorization header to the existing headers
    if (useToken && accessToken) {
        oAuthSettings.headers.Authorization = `Bearer ${accessToken}`
    }

    let errorCode = null

    return fetch(url, {
        ...oAuthSettings,
        body,
    })
        .then((response) => {
            if (response.ok) {
                return response
            } else {
                errorCode = response.status
                throw new Error(response.statusText)
            }
        })
        .then((response) => response.body)
        .then((rb) => {
            const reader = rb.getReader()
            return new ReadableStream({
                start(controller) {
                    // The following function handles each data chunk
                    function push() {
                        // "done" is a Boolean and value a "Uint8Array"
                        reader.read().then(({ done, value }) => {
                            // If there is no more data to read
                            if (done) {
                                controller.close()
                                return
                            }
                            // Get the data and send it to the browser via the controller
                            controller.enqueue(value)
                            push()
                        })
                    }

                    push()
                },
            })
        })
        .then((stream) => {
            // Respond with our stream
            return new Response(stream, {
                headers: { 'Content-Type': 'text/html' },
            }).text()
        })
        .then((result) => {
            if (parseResult && parseResult === 'json') {
                return { data: JSON.parse(result) }
            }
            // Parse the result to an array of objects
            return { data: parseStreamedData(result) }
        })
        .catch((error) => {
            console.error(error)
            if (errorCode === 401) {
                unauthorizedCallback()
            }
        })
}
