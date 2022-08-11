import { FC, Fragment } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Props } from './Breadcrumbs.types'

const Breadcrumbs: FC<Props> = (props) => {
    const { className, items, ...rest } = props

    const renderedItems = items.map((item, index) => {
        const key = `breadcrumb-item-${index}`
        let singleItem = null

        const { to, label, className: itemClassName, ...restItemProps } = item

        if (!to) {
            // Breadcrumb as a non-link.
            singleItem = (
                <span {...restItemProps} key={key} className={classNames('item', itemClassName)}>
                    {label}
                </span>
            )
        } else {
            // Breadcrumb as a link.
            singleItem = (
                <Link {...restItemProps} key={key} to={{ pathname: to }} className={classNames('item', itemClassName)}>
                    {label}
                </Link>
            )
        }

        return (
            <Fragment key={`breadcrumb-item-group-${index}`}>
                {singleItem}
                {index < items.length - 1 ? <span className='divider'>{'/'}</span> : null}
            </Fragment>
        )
    })

    return (
        <div {...rest} className={classNames('breadcrumbs', className)}>
            {renderedItems}
        </div>
    )
}

Breadcrumbs.displayName = 'Breadcrumbs'

export default Breadcrumbs
