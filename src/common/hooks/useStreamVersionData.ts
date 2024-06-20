import { useEffect, useMemo, useState } from 'react'
import chunk from 'lodash/chunk'

import { withTelemetry } from '../services/opentelemetry'
import { streamApi } from '../services'
import { StreamApiReturnType } from '../types/API.types'

type Options = {
    chunkSize?: number
    ids: { id: string; version: string }[]
    requestActive?: boolean
    telemetrySpan: string
    unauthorizedCallback?: () => void
    url: string
}

const defaultOptions: Partial<Options> = {
    requestActive: true,
    chunkSize: 50,
}

export const useStreamVersionData = <T>(options: Options): StreamApiReturnType<T> => {
    const { url, ids, requestActive, chunkSize, unauthorizedCallback, telemetrySpan } = { ...defaultOptions, ...options }
    const chunks = useMemo(() => chunk(ids, chunkSize), [ids, chunkSize])

    const [state, setState] = useState<{
        error: any
        data: any
        loading: boolean
    }>({
        error: null,
        data: null,
        loading: !!requestActive,
    })
    const [refreshIndex, setRefreshIndex] = useState(0)

    useEffect(() => {
        try {
            if (requestActive) {
                setState((prevState) => ({
                    ...prevState,
                    loading: true,
                }))

                Promise.all(
                    chunks.map((ids) => {
                        const versionFilter = ids.map((id) => `httpIdFilter=${id.id}/${id.version}`).join('&')
                        return withTelemetry(
                            () =>
                                streamApi(`${url}?${versionFilter}`, {
                                    method: 'GET',
                                    unauthorizedCallback,
                                }),
                            `${telemetrySpan}-${versionFilter}`
                        )
                    })
                ).then((dataChunks) => {
                    setState((prevState) => ({
                        ...prevState,
                        data: dataChunks.map((dataChunk) => dataChunk.data).flat(),
                        loading: false,
                    }))
                })
            }
        } catch (error) {
            setState((prevState) => ({
                ...prevState,
                loading: false,
                error,
            }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, unauthorizedCallback, refreshIndex, requestActive])

    return {
        ...state,
        updateData: (updatedData: any) => {
            setState((prevState) => ({ ...prevState, data: updatedData }))
        },
        refresh: () => setRefreshIndex((prevState) => prevState + 1),
    }
}
