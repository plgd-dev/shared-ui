import { useEffect, useState } from 'react'
import { context, trace } from '@opentelemetry/api'
import get from 'lodash/get'

import { useIsMounted } from './use-is-mounted'
import { fetchApi, streamApi } from '../services'
import { useAppConfig } from '@/containers/app'

const getData = (method, url, options, telemetryWebTracer) => {
    const { telemetrySpan } = options

    if (telemetryWebTracer && telemetrySpan) {
        const singleSpan = telemetryWebTracer.startSpan(telemetrySpan)

        return context.with(trace.setSpan(context.active(), singleSpan), () =>
            method(url, options).then((result) => {
                trace.getSpan(context.active()).addEvent('fetching-single-span-completed')
                singleSpan.end()

                return result.data
            })
        )
    } else {
        const { data } = method(url, options)
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
    const { telemetryWebTracer, useSecurity } = useAppConfig()
    const apiMethod = get(options, 'streamApi', true) ? streamApi : fetchApi
    options.useSecurity = useSecurity

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
