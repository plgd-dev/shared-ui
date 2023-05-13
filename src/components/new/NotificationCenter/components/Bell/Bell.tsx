import React, { FC, useEffect, useRef, useState } from 'react'
import { Props } from './Bell.types'
import { Icon } from '../../../Icon'
import * as styles from './Bell.styles'

const Bell: FC<Props> = (props) => {
    const { notificationsCount } = props
    const [domReady, setDomReady] = useState(false)
    const iconRef = useRef(null)

    useEffect(() => {
        if (!domReady) {
            setDomReady(true)
        } else {
            // @ts-ignore
            iconRef?.current?.classList.add('shake')
            setTimeout(() => {
                // @ts-ignore
                iconRef?.current?.classList.remove('shake')
            }, 500)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notificationsCount])

    return (
        <a
            css={[styles.bell, props.hasUnRead && styles.hasUnRead]}
            data-block-outside-click={true}
            href='#'
            onClick={(e) => {
                e.preventDefault()
                props.onClick()
            }}
            ref={props.innerRef}
        >
            <Icon icon='bell' ref={iconRef} size={24} />
        </a>
    )
}

Bell.displayName = 'Bell'

export default Bell
