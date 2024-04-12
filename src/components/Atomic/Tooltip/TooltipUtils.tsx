import React, { cloneElement, forwardRef, useMemo, useState } from 'react'
import { mergeRefs } from 'react-merge-refs'
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    useHover,
    useFocus,
    useDismiss,
    useRole,
    useInteractions,
    FloatingPortal,
    useDelayGroupContext,
    arrow,
    UseFloatingReturn,
    Placement,
} from '@floating-ui/react-dom-interactions'
import { motion, AnimatePresence } from 'framer-motion'
import ConditionalWrapper from '../ConditionalWrapper'

interface TooltipState extends UseFloatingReturn, ReturnType<typeof useInteractions> {
    open: boolean
    id: any
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function useTooltipState({
    initialOpen = false,
    placement = 'top',
    id,
    delayGroupContext,
}: {
    initialOpen?: boolean
    placement?: Placement
    id?: any
    delayGroupContext?: {
        delay: number | { open?: number; close?: number }
        currentId: any
        setCurrentId: (id: any) => void
    }
} = {}) {
    const [open, setOpen] = useState(initialOpen)
    const arrowElement = { current: document.getElementById(`${id}-arrow`) as HTMLElement }
    const data = useFloating({
        placement,
        open,
        onOpenChange(open) {
            setOpen(open)

            if (open && delayGroupContext) {
                delayGroupContext.setCurrentId(id)
            }
        },
        whileElementsMounted: autoUpdate,
        middleware: [offset(5), flip(), shift(), arrow({ element: arrowElement })],
    })

    const context = data.context

    const hover = useHover(context, {
        move: false,
        delay: delayGroupContext?.delay,
    })
    const focus = useFocus(context)
    const dismiss = useDismiss(context)
    const role = useRole(context, { role: 'tooltip' })

    const interactions = useInteractions([hover, focus, dismiss, role])

    return useMemo(
        () => ({
            open,
            setOpen,
            id,
            ...interactions,
            ...data,
        }),
        [open, id, interactions, data]
    )
}

export const TooltipAnchor = forwardRef(function TooltipAnchor(
    { children, state, asChild = false, ...props }: { children: JSX.Element | string; asChild?: boolean; state: TooltipState },
    propRef
) {
    const ref = useMemo(() => mergeRefs([state.reference, propRef, (children as any).ref]), [state.reference, propRef, children])

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && typeof children !== 'string') {
        return cloneElement(children, state.getReferenceProps({ ref, ...props, ...children.props }))
    }

    return (
        <div ref={ref} {...state.getReferenceProps(props)}>
            {children}
        </div>
    )
})

export const TooltipContent = forwardRef(function TooltipContent(
    { state, ...props }: { state: TooltipState; portalTarget?: HTMLElement; error: boolean; maxWidth?: number } & React.HTMLProps<HTMLDivElement>,
    propRef
) {
    const { delay } = useDelayGroupContext()

    const ref = useMemo(() => mergeRefs([state.floating, propRef]), [state.floating, propRef])

    const arrowElement = { current: document.getElementById(`${state.id}-arrow`) }

    if (arrowElement.current) {
        const { x: arrowX, y: arrowY } = state?.middlewareData?.arrow || { x: 0, y: 0 }
        const staticSide: string =
            {
                top: 'bottom',
                right: 'left',
                bottom: 'top',
                left: 'right',
            }[state.placement.split('-')[0]] || ''

        if (arrowX) {
            arrowElement.current.style.left = arrowX + 'px'
        }

        if (arrowY) {
            arrowElement.current.style.top = arrowY + 'px'
        }

        arrowElement.current.style.right = ''
        arrowElement.current.style.bottom = ''

        // @ts-ignore
        arrowElement.current.style[staticSide] = '-4px'
    }

    const { portalTarget, error, maxWidth, ...rest } = props

    return (
        <ConditionalWrapper condition={!!portalTarget} wrapper={(c) => <FloatingPortal root={portalTarget}>{c}</FloatingPortal>}>
            <AnimatePresence>
                {state.open && (
                    <motion.div
                        animate={{ opacity: 1, scale: 1 }}
                        className={`tooltip-bubble ${error ? 'tooltip-bubble-error' : ''}`}
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0, scale: 0.85 }}
                        ref={ref}
                        style={{
                            position: state.strategy,
                            top: state.y ?? 0,
                            left: state.x ?? 0,
                            maxWidth: maxWidth,
                            ...rest.style,
                        }}
                        transition={
                            // When in "grouped phase", make the transition faster
                            // The open delay becomes 1ms during this phase.
                            typeof delay === 'object' && delay.open === 1 ? { duration: 0.08 } : { type: 'spring', damping: 20, stiffness: 300 }
                        }
                        {...state.getFloatingProps(rest)}
                    />
                )}
            </AnimatePresence>
        </ConditionalWrapper>
    )
})
