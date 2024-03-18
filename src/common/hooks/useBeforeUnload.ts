import { useEffect } from 'react'

export const useBeforeUnload = ({ when, message }: { when: boolean; message: string }) => {
    useEffect(() => {
        const handleBeforeUnload = (event: any) => {
            event.preventDefault()
            event.stopPropagation()
            event.returnValue = message

            return true
        }

        if (when) {
            window.addEventListener('beforeunload', handleBeforeUnload)
        }

        return () => window.removeEventListener('beforeunload', handleBeforeUnload)
    }, [when, message])
}
