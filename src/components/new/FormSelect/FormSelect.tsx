import { FC } from 'react'
import { Props } from './FormSelect.types'
import * as styles from './FormSelect.styles'
import Select from 'react-select'

const FormSelect: FC<Props> = (props) => {
    const { className, defaultValue, disabled, isSearchable, options, name, onChange, value } = props
    return (
        <Select
            className={className}
            classNamePrefix='select'
            css={styles.select}
            defaultValue={defaultValue}
            isDisabled={disabled}
            isSearchable={isSearchable}
            name={name}
            onChange={onChange}
            options={options}
            value={value}
        />
    )
}

FormSelect.displayName = 'FormSelect'

export default FormSelect
