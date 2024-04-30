import { FC, MouseEvent } from 'react'

import { defaultProps, Props } from './Link.types'
import * as styles from './Link.styles'
import { linkSizes } from './constants'

const Link: FC<Props> = (props) => {
    const { children, dataTestId, disabled, href, onClick, preventDefault, size, target } = { ...defaultProps, ...props }

    const handleOnClick = (e: MouseEvent<HTMLElement>) => {
        if (!disabled && onClick) {
            preventDefault && e.preventDefault()
            onClick(e)
        }
    }

    return (
        <a
            css={[size === linkSizes.NORMAL && styles.link, size === linkSizes.BIG && styles.big]}
            data-test-id={dataTestId}
            href={href || '#'}
            onClick={handleOnClick}
            target={target}
        >
            {children}
        </a>
    )
}

Link.displayName = 'Link'

export default Link
