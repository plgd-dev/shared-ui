import { useEffect } from 'react'

export const useClickOutside = (ref: any, callback: any) => {
    useEffect(() => {
        const handleClick = (e: any) => {
            console.log('CLICK')
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
