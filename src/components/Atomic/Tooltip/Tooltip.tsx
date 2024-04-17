import { FC, ReactNode, useMemo } from 'react'
import { Global } from '@emotion/react'
import { FloatingDelayGroup, useDelayGroup, useDelayGroupContext } from '@floating-ui/react-dom-interactions'
import classNames from 'classnames'

import { Props, defaultProps } from './Tooltip.types'
import * as styles from './Tooltip.styles'
import { useTooltipState, TooltipAnchor, TooltipContent } from './TooltipUtils'
import { tooltipVariants } from './constants'
import ConditionalWrapper from '../ConditionalWrapper'

const Tooltip: FC<Props> = (props) => {
    const { content, children, delay, id: propId, placement, className, initialOpen, maxWidth, portalTarget, variant } = { ...defaultProps, ...props }
    const delayGroupContext = useDelayGroupContext()
    const id: string | ReactNode = useMemo(() => propId || content, [propId, content])

    // We extended the hook to support these options.
    const state = useTooltipState({
        delayGroupContext: { ...delayGroupContext, delay: delay || 200 },
        id,
        initialOpen,
        placement,
    })

    useDelayGroup(state.context, { id })

    return (
        <ConditionalWrapper
            condition={!!className || !!propId}
            wrapper={(c) => (
                <div className={className} id={propId}>
                    {c}
                </div>
            )}
        >
            <>
                <Global styles={[styles.tooltip, variant === tooltipVariants.ERROR && styles.error]} />
                <TooltipAnchor asChild state={state}>
                    {children}
                </TooltipAnchor>
                {!!content && (
                    <TooltipContent error={variant === tooltipVariants.ERROR} maxWidth={maxWidth} portalTarget={portalTarget} state={state}>
                        {content}
                        <div className={classNames('tooltip-arrow', variant === tooltipVariants.ERROR && 'tooltip-arrow-error')} id={`${id}-arrow`} />
                    </TooltipContent>
                )}
            </>
        </ConditionalWrapper>
    )
}

export { FloatingDelayGroup }

Tooltip.displayName = 'Tooltip'
Tooltip.defaultProps = defaultProps

export default Tooltip
