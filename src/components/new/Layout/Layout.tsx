import { Helmet } from 'react-helmet'
import dropRight from 'lodash/dropRight'
import last from 'lodash/last'
import classNames from 'classnames'
import Breadcrumbs from '../Breadcrumbs'
import PageLoader from '../PageLoader'
import { layoutTypes } from './constants'
import { FC } from 'react'
import { defaultProps, Props } from './Layout.types'

const { SPLIT } = layoutTypes

/**
 * Basic layout component.
 * @param {Element} header - Elements to be rendered inline with the breadcrumbs, but justified to the end.
 * @param {Array} breadcrumbs - Breadcrumbs to be rendered.
 * @param {Boolean} loading - Display's a loader below status bar.
 * @param {String} title - Sets the title of the browser tab.
 * @param {String} type - Layout type. When set to SPLIT.
 * @param {Boolean} shimmeringBreadcrumbs - Enables a "shimmering" loader to be rendered when loading is true.
 * the first n children will be rendered on the left side and the last child will be rendered to the right side.
 */
const Layout: FC<Props> = (props) => {
    const { className, header, breadcrumbs, loading, title, type, shimmeringBreadcrumbs, children, ...rest } = props
    const isSplit = type === SPLIT && Array.isArray(children)

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <PageLoader loading={!!loading} />
            <div {...rest} className={classNames('layout', { className })}>
                {(breadcrumbs || header) && (
                    <div className='layout-header'>
                        {breadcrumbs && (
                            <Breadcrumbs
                                items={breadcrumbs}
                                className={classNames({
                                    shimmering: shimmeringBreadcrumbs && loading,
                                })}
                            />
                        )}
                        <div className='layout-header-right'>{header}</div>
                    </div>
                )}
                <div className={classNames('layout-content', { split: isSplit })}>
                    {isSplit ? (
                        <>
                            <div className='layout-split-common layout-left'>{dropRight(children)}</div>
                            {children.length > 1 && <div className='layout-split-common layout-right'>{last(children)}</div>}
                        </>
                    ) : (
                        children
                    )}
                </div>
            </div>
        </>
    )
}

Layout.displayName = 'Layout'
Layout.defaultProps = defaultProps

export default Layout
