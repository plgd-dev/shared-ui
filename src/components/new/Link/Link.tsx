import { FC, MouseEvent } from 'react'
import { Props } from './Link.types'
import * as styles from './Link.styles'

const Link: FC<Props> = (props) => {
    const { children, disabled, href, onClick, preventDefault, target } = props

    const handleOnClick = (e: MouseEvent<HTMLElement>) => {
        if (!disabled && onClick) {
            preventDefault && e.preventDefault()
            onClick(e)
        }
    }

    return (
        <a css={styles.link} href={href || '#'} onClick={handleOnClick} target={target}>
            {children}
        </a>
    )
}

Link.displayName = 'Link'

export default Link
