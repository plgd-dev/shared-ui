import { useEffect, useMemo, useState } from 'react'
import { context, trace } from '@opentelemetry/api'
import get from 'lodash/get'

import { useIsMounted } from './use-is-mounted'
import { fetchApi, streamApi } from '../services'
import { getApiUrl } from '../constants'

export const getData = async (method, url, options) => {
    const { telemetrySpan, telemetryWebTracer, ...restOptions } = options

    if (telemetryWebTracer && telemetrySpan) {
        const singleSpan = telemetryWebTracer.startSpan(telemetrySpan)

        return context.with(
            trace.setSpan(context.active(), singleSpan),
            async () =>
                await method(url, restOptions).then((result) => {
                    trace.getSpan(context.active()).addEvent('fetching-single-span-completed')
                    singleSpan.end()

                    return result?.data
                })
        )
    } else {
        const { data } = await method(url, restOptions)
        return data
    }
}

export const useStreamApi = (url, options = {}) => {
    const isMounted = useIsMounted()
    const requestActive = get(options, 'requestActive', true)
    const [state, setState] = useState({
        error: null,
        loading: requestActive,
        data: null,
    })

    const [refreshIndex, setRefreshIndex] = useState(0)
    const apiMethod = get(options, 'streamApi', true) ? streamApi : fetchApi

    const requestUrl = useMemo(() => getApiUrl(url), [url])

    useEffect(
        () => {
            ;(async () => {
                try {
                    if (requestActive) {
                        // Set loading to true
                        setState({ ...state, loading: true })
                        const apiResponse = await getData(apiMethod, requestUrl, options)

                        if (isMounted.current) {
                            setState({
                                ...state,
                                data: apiResponse,
                                error: null,
                                loading: false,
                            })
                        }
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
        [url, refreshIndex, requestActive] // eslint-disable-line
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
