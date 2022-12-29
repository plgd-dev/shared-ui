import { FC, ReactNode, useMemo, useRef } from 'react'
import { Props } from './Tooltip.types'
import * as styles from './Tooltip.styles'
import { Global } from '@emotion/react'
import { FloatingDelayGroup, useDelayGroup, useDelayGroupContext } from '@floating-ui/react-dom-interactions'
import { useTooltipState, TooltipAnchor, TooltipContent } from './TooltipUtils'

const Tooltip: FC<Props> = (props) => {
    const { content, children, delay, id: propId, className, initialOpen } = props
    const delayGroupContext = useDelayGroupContext()
    const id: string | ReactNode = useMemo(() => propId || content, [propId, content])

    // We extended the hook to support these options.
    const state = useTooltipState({
        delayGroupContext: { ...delayGroupContext, delay: delay || 200 },
        id,
        initialOpen,
    })

    useDelayGroup(state.context, { id })

    return (
        <div className={className} id={propId}>
            <Global styles={styles.tooltip} />
            <TooltipAnchor asChild state={state}>
                {children}
            </TooltipAnchor>
            <TooltipContent state={state}>
                {content}
                <div className='tooltip-arrow' id={`${id}-arrow`} />
            </TooltipContent>
        </div>
    )
}

export { FloatingDelayGroup }

Tooltip.displayName = 'Tooltip'

export default Tooltip
