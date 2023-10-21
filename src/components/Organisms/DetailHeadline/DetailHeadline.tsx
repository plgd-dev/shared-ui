import { createElement, FC } from 'react'
import classNames from 'classnames'

import { Props, defaultProps } from './DetailHeadline.types'
import * as styles from './DetailHeadline.styles'

const DetailHeadline: FC<Props> = (props) => {
    const mergedProps = { ...defaultProps, ...props }
    const HeadlineElement = ({ type, children, ...props }: Props) => createElement(type as string, props, children)

    const { dataTestId, className, ...rest } = mergedProps

    return (
        <HeadlineElement
            {...rest}
            children={mergedProps.children}
            className={classNames(mergedProps.type, className)}
            css={[(theme) => styles.headline(theme, mergedProps.type!)]}
            data-test-id={mergedProps.dataTestId}
        />
    )
}

DetailHeadline.displayName = 'DetailHeadline'

export default DetailHeadline
