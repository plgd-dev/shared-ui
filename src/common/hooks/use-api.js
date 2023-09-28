import { useEffect, useState } from 'react'
import { context, trace } from '@opentelemetry/api'
import get from 'lodash/get'

import { useIsMounted } from './use-is-mounted'
import { fetchApi, streamApi } from '../services'

const getData = async (method, url, options) => {
    const { telemetrySpan, telemetryWebTracer, ...restOptions } = options

    if (telemetryWebTracer && telemetrySpan) {
        const singleSpan = telemetryWebTracer.startSpan(telemetrySpan)

        return context.with(
            trace.setSpan(context.active(), singleSpan),
            async () =>
                await method(url, restOptions).then((result) => {
                    trace.getSpan(context.active()).addEvent('fetching-single-span-completed')
                    singleSpan.end()

                    return result.data
                })
        )
    } else {
        const { data } = await method(url, restOptions)
        return data
    }
}

export const useStreamApi = (url, options = {}) => {
    const isMounted = useIsMounted()
    const [state, setState] = useState({
        error: null,
        loading: true,
        data: null,
    })

    const [refreshIndex, setRefreshIndex] = useState(0)
    let apiMethod = get(options, 'streamApi', true) ? streamApi : fetchApi

    const urlBase = url.split('?')[0]?.split('/api/')[1]
    const mockKey = urlBase.toUpperCase().replace(/\//g, '_').replace(/-/g, '_')

    useEffect(
        () => {
            ;(async () => {
                try {
                    // Set loading to true
                    setState({ ...state, loading: true })
                    let data = []

                    if (process.env[`REACT_APP_MOCK_API_${mockKey}`]) {
                        const mockUrl = `${process.env.REACT_APP_MOCK_BASE_URL}/api/${urlBase}`
                        data = await getData(fetchApi, mockUrl, options)
                    } else {
                        data = await getData(apiMethod, url, options)
                    }

                    if (isMounted.current) {
                        setState({
                            ...state,
                            data,
                            error: null,
                            loading: false,
                        })
                    }
                } catch (error) {
                    if (isMounted.current) {
                        setState({
                            ...state,
                            data: null,
                            error,
                            loading: false,
                        })
                    }
                }
            })()
        },
        [url, refreshIndex] // eslint-disable-line
    )

    return {
        ...state,
        updateData: (updatedData) => {
            setState((prevState) => ({ ...prevState, data: updatedData }))
        },
        refresh: () => setRefreshIndex(Math.random),
        setState,
    }
}
