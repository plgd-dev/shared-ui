import { useEffect, useState } from 'react'
import { context, trace } from '@opentelemetry/api'
import get from 'lodash/get'

import { useIsMounted } from './use-is-mounted'
import { fetchApi, streamApi } from '../services'
import { useAppConfig } from '@/containers/App'

const getData = async (method, url, options, telemetryWebTracer) => {
    const { telemetrySpan, ...restOptions } = options

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
    const { telemetryWebTracer, unauthorizedCallback } = useAppConfig()
    options.unauthorizedCallback = unauthorizedCallback
    const apiMethod = get(options, 'streamApi', true) ? streamApi : fetchApi

    useEffect(
        () => {
            ;(async () => {
                try {
                    // Set loading to true
                    setState({ ...state, loading: true })
                    const data = await getData(apiMethod, url, options, telemetryWebTracer)

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
        updateData: (updatedData) => setState({ ...state, data: updatedData }),
        refresh: () => setRefreshIndex(Math.random),
    }
}
