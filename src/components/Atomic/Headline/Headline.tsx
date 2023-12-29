import { createElement, FC } from 'react'
import classNames from 'classnames'

import { Props, defaultProps } from './Headline.types'
import * as styles from './Headline.styles'

const Headline: FC<Props> = (props) => {
    const mergedProps = { ...defaultProps, ...props }
    const HeadlineElement = ({ type, children, ...props }: Props) => createElement(type as string, props, children)

    const { dataTestId, className, type, ...rest } = mergedProps

    return (
        <HeadlineElement
            {...rest}
            children={mergedProps.children}
            className={classNames(mergedProps.type, className)}
            css={(theme) => [styles.headline(theme, mergedProps.type!), mergedProps.type === 'h6' && styles.h6(theme)]}
            data-test-id={mergedProps.dataTestId}
            type={mergedProps.type}
        />
    )
}

Headline.displayName = 'Headline'

export default Headline
