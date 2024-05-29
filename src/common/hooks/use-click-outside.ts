import { useEffect } from 'react'

export const useClickOutside = (ref: any, callback: any) => {
    useEffect(() => {
        const handleClick = (e: any) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback()
            }
        }
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [callback, ref])
}
