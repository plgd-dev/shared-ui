export type StreamApiReturnType<T> = {
    data: T | null
    updateData: (data: T) => void
    loading: boolean
    error: string | null
    refresh: () => void
}
