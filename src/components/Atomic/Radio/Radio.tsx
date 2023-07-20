import React, { FC, SyntheticEvent } from 'react'
import { Props } from './Radio.types'
import * as styles from './Radio.styles'
import Checkbox from '../Checkbox'
import { isFunction } from 'lodash'

const Radio: FC<Props> = (props) => {
    const { id, className, items, name, defaultValue, error, onChange } = props
    const handleChange = (value: string, e: SyntheticEvent) => {
        isFunction(onChange) && onChange(value, e)
    }

    return (
        <div className={className} css={styles.radio} id={id}>
            <fieldset>
                {items.map((item) => (
                    <Checkbox
                        css={styles.radioItem}
                        defaultChecked={defaultValue === item.value}
                        error={error}
                        id={item.value}
                        key={item.value}
                        label={item.label}
                        name={name}
                        onChange={(e) => handleChange(item.value, e)}
                        type='radio'
                    />
                ))}
            </fieldset>
        </div>
    )
}

Radio.displayName = 'Radio'

export default Radio
