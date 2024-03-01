import { useEffect, useState } from 'react'

export default function usePersistentState<T>(key: string, initialValue: T): [T, (value: T) => void, boolean] {
    const [state, setInternalState] = useState<T>(initialValue)
    const [rehydrated, setRehydrate] = useState<boolean>(false)

    useEffect(() => {
        const value = localStorage.getItem(key)

        if (!value) return

        setInternalState(JSON.parse(value))
        setRehydrate(true)
    }, [key])

    const setState = (value: T) => {
        localStorage.setItem(key, JSON.stringify(value))
        setInternalState(value)
    }

    return [state, setState, rehydrated]
}
