type ErrorType = {
    response?: {
        data?: {
            err?: string
            message?: string
        }
    }
    message?: string
}

// Return a message from the error response of an API
export const getApiErrorMessage = (error: ErrorType | string): string | undefined =>
    typeof error === 'string' ? error : error?.response?.data?.err || error?.response?.data?.message || error?.message || undefined
