import { FC, ReactNode, useMemo } from 'react'
import { Global } from '@emotion/react'
import { FloatingDelayGroup, useDelayGroup, useDelayGroupContext } from '@floating-ui/react-dom-interactions'

import { Props, defaultProps } from './Tooltip.types'
import * as styles from './Tooltip.styles'
import { useTooltipState, TooltipAnchor, TooltipContent } from './TooltipUtils'
import { tooltipVariants } from './constants'

const Tooltip: FC<Props> = (props) => {
    const { content, children, delay, id: propId, placement, className, initialOpen, portalTarget, variant } = { ...defaultProps, ...props }
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
        <div className={className} id={propId}>
            <Global styles={[styles.tooltip, variant === tooltipVariants.ERROR && styles.error]} />
            <TooltipAnchor asChild state={state}>
                {children}
            </TooltipAnchor>
            {!!content && (
                <TooltipContent error={variant === tooltipVariants.ERROR} portalTarget={portalTarget} state={state}>
                    {content}
                    <div className='tooltip-arrow' id={`${id}-arrow`} />
                </TooltipContent>
            )}
        </div>
    )
}

export { FloatingDelayGroup }

Tooltip.displayName = 'Tooltip'
Tooltip.defaultProps = defaultProps

export default Tooltip
