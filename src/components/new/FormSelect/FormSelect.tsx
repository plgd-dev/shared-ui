import { FC } from 'react'
import { Props } from './FormSelect.types'
import * as styles from './FormSelect.styles'
import Select from 'react-select'

const FormSelect: FC<Props> = (props) => {
    const { className, defaultValue, disabled, isSearchable, options, name, onChange, value } = props
    const stylesOverride = {
        menu: (base: any) => ({
            ...base,
            width: 'max-content',
            minWidth: '100%',
        }),
    }
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
            styles={stylesOverride}
        />
    )
}

FormSelect.displayName = 'FormSelect'

export default FormSelect
