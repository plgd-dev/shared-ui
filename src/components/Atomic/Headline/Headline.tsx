import { createElement, FC } from 'react'
import { Props, defaultProps } from './Headline.types'
import * as styles from './Headline.styles'
import classNames from 'classnames'

const Headline: FC<Props> = (props) => {
    const mergedProps = { ...defaultProps, ...props }
    const HeadlineElement = ({ type, children, ...props }: Props) => createElement(type as string, props, children)

    return (
        <HeadlineElement
            {...mergedProps}
            children={mergedProps.children}
            className={classNames(mergedProps.type, mergedProps.className)}
            css={styles.headline(mergedProps.type!)}
        />
    )
}

Headline.displayName = 'Headline'

export default Headline
