import React, { FC, useMemo } from 'react'
import classNames from 'classnames'
import startsWith from 'lodash/startsWith'
import isEmpty from 'lodash/isEmpty'
import pickBy from 'lodash/pickBy'
import { v4 as uuidv4 } from 'uuid'
import { Props } from './Label.types'

const Label: FC<Props> = (props) => {
    const labelID = useMemo(uuidv4, [])
    const { children, title, className, id, onClick, htmlFor, style, errorMessage, inline, labelRef, required, dataClassName, ...rest } = props
    const dataAttributes = pickBy(props, (_, key: number) => startsWith(key.toString(), 'data-'))
    const titleClassName = classNames('label-title', 'no-wrap-text', {
        'has-error': !isEmpty(errorMessage),
    })
    return (
        <label {...rest} ref={labelRef} id={id} htmlFor={htmlFor} style={style} className={classNames('label', { inline }, className)} onClick={onClick}>
            <div className={classNames('label-data', dataClassName)}>
                <div {...dataAttributes} id={labelID} className={titleClassName}>
                    {title}
                    {required && <span className='required'>{'*'}</span>}
                </div>
                {React.Children.map(children, (child: any) => {
                    if (!child?.props) {
                        return child
                    }
                    if (isEmpty(child.props['aria-labelledby'])) {
                        return React.cloneElement(child, {
                            'aria-labelledby': labelID,
                        })
                    }
                    return child
                })}
            </div>
            {errorMessage && <div className='label-error-message'>{errorMessage}</div>}
        </label>
    )
}

Label.displayName = 'Label'

export default Label
