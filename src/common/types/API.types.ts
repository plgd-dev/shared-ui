export type StreamApiReturnType<T> = {
    data: T | null
    updateData: (data: T) => void
    loading: boolean
    error: string | null
    refresh: () => void
}

export type FetchApiReturnType<T> = {
    data: T | null
    status: number
    statusText: string
}
