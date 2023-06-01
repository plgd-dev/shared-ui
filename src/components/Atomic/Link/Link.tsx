import { FC, MouseEvent } from 'react'
import { defaultProps, Props } from './Link.types'
import * as styles from './Link.styles'

const Link: FC<Props> = (props) => {
    const { children, dataTestId, disabled, href, onClick, preventDefault, target } = { ...defaultProps, ...props }

    const handleOnClick = (e: MouseEvent<HTMLElement>) => {
        if (!disabled && onClick) {
            preventDefault && e.preventDefault()
            onClick(e)
        }
    }

    return (
        <a css={styles.link} href={href || '#'} onClick={handleOnClick} target={target} data-test-id={dataTestId}>
            {children}
        </a>
    )
}

Link.displayName = 'Link'
Link.defaultProps = defaultProps

export default Link
