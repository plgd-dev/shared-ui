import React, { FC } from 'react'
import { Props } from './Steps.types'
import * as styles from './Steps.styles'

// assets
import IconDone from './assets/IconDone'
import IconActive from './assets/IconActive'
import IconDisabled from './assets/IconDisabled'

export const Steps: FC<Props> = (props) => {
    const { steps, active, className, id } = props
    return (
        <ul className={className} css={styles.steps} id={id}>
            {steps.map((step, key) => (
                <>
                    <li css={[styles.step, active > key && styles.stepDone, active === key && styles.stepActive, active < key && styles.stepDisabled]}>
                        {active > key && <IconDone height={16} width={16} />}
                        {active === key && <IconActive css={styles.svg} height={16} width={16} />}
                        {active < key && <IconDisabled css={styles.svg} height={16} width={16} />}
                        <span className='step-label' css={styles.stepLabel}>
                            {step}
                        </span>
                    </li>
                    {key !== steps.length - 1 && (
                        <li css={styles.separator}>
                            <div css={styles.separatorLine} />
                        </li>
                    )}
                </>
            ))}
        </ul>
    )
}

Steps.displayName = 'Steps'

export default Steps
