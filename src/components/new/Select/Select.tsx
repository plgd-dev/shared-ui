import ReactSelect, { components, DropdownIndicatorProps } from 'react-select'

const DropdownIndicator = (props: DropdownIndicatorProps) => {
    const icon = props.selectProps.menuIsOpen ? 'fa-chevron-up' : 'fa-chevron-down'
    return (
        <components.DropdownIndicator {...props}>
            <i className={`fas ${icon}`} />
        </components.DropdownIndicator>
    )
}

const Select = (props: any) => <ReactSelect {...props} classNamePrefix='select' components={{ DropdownIndicator }} />

export default Select
