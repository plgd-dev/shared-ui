import { useCallback, useEffect, useState } from 'react'

export default function usePersistentState<T>(key: string, initialValue: T): [T, (value: T) => void, boolean] {
    const [state, setInternalState] = useState<T>(initialValue)
    const [rehydrated, setRehydrate] = useState<boolean>(false)

    useEffect(() => {
        if (key === '') {
            setRehydrate(true)
            return
        }
        const value = localStorage.getItem(key)

        if (!value) {
            setRehydrate(true)
            return
        }

        setInternalState(JSON.parse(value))
        setRehydrate(true)
    }, [key])

    const setState = useCallback(
        (value: T) => {
            if (key !== '') {
                localStorage.setItem(key, JSON.stringify(value))
            }

            setInternalState(value)
        },
        [key]
    )

    return [state, setState, rehydrated]
}
