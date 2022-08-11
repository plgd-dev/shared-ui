import React from 'react'
import classNames from 'classnames'
import { Props } from './Checkbox.types'
import { FC } from 'react'

const Checkbox: FC<Props> = (props) => {
    const { id, containerClassName, inputRef, label, checked, disabled, ...rest } = props
    return (
        <label
            className={classNames('plgd-checkbox', {
                disabled,
            })}
            id={id}
        >
            <input {...rest} checked={checked} type='checkbox' ref={inputRef} />
            <span className='checkbox-item'>
                <i
                    className={classNames('fas', {
                        'fa-check': checked,
                        'fa-minus': !checked,
                    })}
                />
            </span>
            {label && <div className='checkbox-label'>{label}</div>}
        </label>
    )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
