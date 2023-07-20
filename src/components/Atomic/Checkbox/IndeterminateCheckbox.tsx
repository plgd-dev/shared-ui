import React, { forwardRef, useRef, useEffect, Ref } from 'react'
import Checkbox from './Checkbox'
import { Props } from './Checkbox.types'

const IndeterminateCheckbox = forwardRef<Ref<HTMLInputElement>, Props & { indeterminate: boolean }>((props, ref) => {
    const { indeterminate, ...rest } = props
    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef

    useEffect(() => {
        // @ts-ignore
        resolvedRef.current.indeterminate = indeterminate
        // @ts-ignore
        resolvedRef.current.checked = indeterminate
    }, [resolvedRef, indeterminate])

    return <Checkbox inputRef={resolvedRef} {...rest} />
})

IndeterminateCheckbox.displayName = 'IndeterminateCheckbox'

export default IndeterminateCheckbox
