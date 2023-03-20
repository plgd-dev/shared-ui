import { FC } from 'react'
import { GroupedOption, Option, Props } from './FormSelect.types'
import * as styles from './FormSelect.styles'
import Select, {
    components,
    ContainerProps,
    DropdownIndicatorProps,
    MenuListProps,
    MenuProps,
    OptionProps,
    SingleValueProps,
    ValueContainerProps,
} from 'react-select'
import { Icon } from '../Icon'

const FormSelect: FC<Props> = (props) => {
    const { className, defaultValue, disabled, isSearchable, options, name, menuIsOpen, onChange, value } = props
    const stylesOverride = {
        menu: (base: any) => ({
            ...base,
            width: 'max-content',
            minWidth: '100%',
        }),
    }

    const ValueContainer = ({ children, ...props }: ValueContainerProps<Option>) => (
        <components.ValueContainer {...props} css={styles.valueContainer}>
            {children}
        </components.ValueContainer>
    )

    const SelectContainer = ({ children, ...props }: ContainerProps<Option>) => (
        <components.SelectContainer {...props} css={styles.selectContainer}>
            {children}
        </components.SelectContainer>
    )

    const SingleValue = ({ children, ...props }: SingleValueProps<Option>) => (
        <components.SingleValue {...props} css={styles.value}>
            {children}
        </components.SingleValue>
    )

    const DropdownIndicator = (props: DropdownIndicatorProps) => (
        <components.DropdownIndicator {...props} css={styles.dropdownIndicator}>
            <div css={[styles.indicator, props.selectProps.menuIsOpen && styles.indicatorOpen]}>
                <Icon icon='table-arrow-down' size={10} />
            </div>
        </components.DropdownIndicator>
    )

    const Menu = (props: MenuProps<Option, false, GroupedOption>) => (
        <components.Menu<Option, false, GroupedOption> {...props} css={styles.menu}>
            {props.children}
        </components.Menu>
    )

    const MenuList = (props: MenuListProps<Option, false, GroupedOption>) => (
        <components.MenuList {...props} css={styles.menuList}>
            {props.children}
        </components.MenuList>
    )

    const Option = (props: OptionProps<Option, false, GroupedOption>) => (
        <components.Option {...props} css={[styles.option, props.isSelected && styles.optionSelected]}>
            {props.children}
        </components.Option>
    )

    return (
        <Select
            className={className}
            classNamePrefix='select'
            components={{ DropdownIndicator, Menu, MenuList, Option, SelectContainer, SingleValue, ValueContainer }}
            css={styles.select}
            defaultValue={defaultValue}
            isDisabled={disabled}
            isSearchable={isSearchable}
            menuIsOpen={menuIsOpen}
            name={name}
            onChange={onChange}
            options={options}
            styles={stylesOverride}
            value={value}
        />
    )
}

FormSelect.displayName = 'FormSelect'

export default FormSelect
