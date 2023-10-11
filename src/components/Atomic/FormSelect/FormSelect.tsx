import { forwardRef } from 'react'
import Select, {
    components,
    ContainerProps,
    ControlProps,
    DropdownIndicatorProps,
    MenuListProps,
    MenuProps,
    OptionProps,
    PlaceholderProps,
    SingleValueProps,
    ValueContainerProps,
} from 'react-select'

import { GroupedOption, Option, Props, defaultProps } from './FormSelect.types'
import * as styles from './FormSelect.styles'
import { convertSize, IconTableArrowDown } from '../Icon'
import { selectSizes } from './constants'

const FormSelect = forwardRef<any, Props>((props, ref) => {
    const { className, defaultValue, error, disabled, inlineStyle, isSearchable, options, name, menuIsOpen, onChange, size, value, ...rest } = {
        ...defaultProps,
        ...props,
    }
    const stylesOverride = {
        menu: (base: any) => ({
            ...base,
            width: 'max-content',
            minWidth: '100%',
        }),
    }

    const Control = ({ children, ...props }: ControlProps<Option>) => (
        <components.Control
            {...props}
            css={[styles.control, error && styles.error, size === selectSizes.SMALL && styles.small, inlineStyle && styles.inlineStyle]}
        >
            {children}
        </components.Control>
    )

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
        <components.SingleValue {...props} css={[styles.value, props.selectProps.isDisabled && styles.disabled]}>
            {children}
        </components.SingleValue>
    )

    const DropdownIndicator = (props: DropdownIndicatorProps) => (
        <components.DropdownIndicator {...props} css={styles.dropdownIndicator}>
            <div css={[styles.indicator, props.selectProps.menuIsOpen && styles.indicatorOpen]}>
                <IconTableArrowDown {...convertSize(10)} />
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

    const Placeholder = (props: PlaceholderProps<Option>) => (
        <components.Placeholder {...props} css={[styles.placeholder, props.selectProps.isDisabled && styles.disabled]}>
            {props.children}
        </components.Placeholder>
    )

    return (
        <Select
            {...rest}
            className={className}
            classNamePrefix='select'
            components={{ DropdownIndicator, Menu, MenuList, Option, SelectContainer, SingleValue, ValueContainer, Placeholder, Control }}
            css={[(theme) => styles.select(theme, size, disabled)]}
            defaultValue={defaultValue}
            isDisabled={disabled}
            isSearchable={isSearchable}
            menuIsOpen={menuIsOpen}
            name={name}
            onChange={onChange}
            options={options}
            ref={ref}
            styles={stylesOverride}
            value={value}
        />
    )
})

FormSelect.displayName = 'FormSelect'
FormSelect.defaultProps = defaultProps

export default FormSelect
