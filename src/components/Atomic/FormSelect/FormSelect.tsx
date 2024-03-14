import { forwardRef, useRef } from 'react'
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
    InputProps,
    MultiValueProps,
    MultiValueRemoveProps,
    GroupBase,
    MultiValueGenericProps,
} from 'react-select'
import { mergeRefs } from 'react-merge-refs'

import { Props, defaultProps, OptionType } from './FormSelect.types'
import * as styles from './FormSelect.styles'
import { convertSize, IconTableArrowDown } from '../Icon'
import { selectAligns, selectSizes } from './constants'
import IconCloseX from '../Icon/components/IconCloseX'

const FormSelect = forwardRef<any, Props>((props, ref) => {
    const {
        align,
        autoWidth,
        className,
        defaultValue,
        error,
        disabled,
        inlineStyle,
        footerLinks,
        isMulti,
        isSearchable,
        options,
        name,
        menuIsOpen,
        menuZIndex,
        onChange,
        size,
        value,
        ...rest
    } = {
        ...defaultProps,
        ...props,
    }

    const localRef = useRef<any>(null)

    const stylesOverride = {
        menu: (base: any) => ({
            ...base,
            width: 'max-content',
            minWidth: '100%',
        }),
        menuPortal: (base: any) => ({ ...base, zIndex: menuZIndex || 1 }),
    }

    const Control = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(props: ControlProps<Option, IsMulti, Group>) => (
        <components.Control
            {...props}
            css={[styles.control, error && styles.error, size === selectSizes.SMALL && styles.small, inlineStyle && styles.inlineStyle]}
        >
            {props.children}
        </components.Control>
    )

    const ValueContainer = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(
        props: ValueContainerProps<Option, IsMulti, Group>
    ) => (
        <components.ValueContainer {...props} css={[styles.valueContainer, props.isMulti && styles.valueContainerMulti]}>
            {props.children}
        </components.ValueContainer>
    )

    const SelectContainer = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(
        props: ContainerProps<Option, IsMulti, Group>
    ) => (
        <components.SelectContainer {...props} css={[autoWidth ? styles.selectAutoWidthContainer : styles.selectContainer]}>
            {props.children}
        </components.SelectContainer>
    )

    const SingleValue = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(
        props: SingleValueProps<Option, IsMulti, Group>
    ) => (
        <components.SingleValue
            {...props}
            css={[styles.value, props.selectProps.isDisabled && styles.disabled, align === selectAligns.RIGHT && styles.textRight]}
        >
            {props.children}
        </components.SingleValue>
    )

    const MultiValue = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(
        props: MultiValueProps<Option, IsMulti, Group>
    ) => (
        <components.MultiValue
            {...props}
            css={[
                props.selectProps.isDisabled && styles.disabled,
                align === selectAligns.RIGHT && styles.textRight,
                props.isMulti && styles.multiValue,
                align === selectAligns.RIGHT && props.isMulti && styles.multiValueRight,
            ]}
        >
            {props.children}
        </components.MultiValue>
    )

    const MultiValueLabel = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(
        props: MultiValueGenericProps<Option, IsMulti, Group>
    ) => <div css={styles.multiValueLabel}>{props.children}</div>

    const MultiValueRemove = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(
        props: MultiValueRemoveProps<Option, IsMulti, Group>
    ) => (
        <div css={styles.multiValueRemove}>
            <IconCloseX />
        </div>
    )

    const DropdownIndicator = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(
        props: DropdownIndicatorProps<Option, IsMulti, Group>
    ) => (
        <components.DropdownIndicator {...props} css={styles.dropdownIndicator}>
            <div css={[styles.indicator, props.selectProps.menuIsOpen && styles.indicatorOpen]}>
                <IconTableArrowDown {...convertSize(10)} />
            </div>
        </components.DropdownIndicator>
    )

    const Menu = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(props: MenuProps<Option, IsMulti, Group>) => (
        <components.Menu {...props} css={(theme) => styles.menu(theme, menuZIndex || 1)}>
            {props.children}
            {!!footerLinks && (
                <div css={styles.footerComponent}>
                    {footerLinks.map((link, key) => (
                        <a
                            css={styles.footerLink}
                            href='#'
                            key={key}
                            onClick={(e) => {
                                e.preventDefault()
                                props.clearValue()
                                localRef.current.blur()
                                link.onClick()
                            }}
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            )}
        </components.Menu>
    )

    const MenuList = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(props: MenuListProps<Option, IsMulti, Group>) => (
        <components.MenuList {...props} css={styles.menuList} maxHeight={footerLinks ? props.maxHeight - 54 : props.maxHeight}>
            {props.children}
        </components.MenuList>
    )

    const Option = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(props: OptionProps<Option, IsMulti, Group>) => (
        <components.Option {...props} css={[styles.option, props.isSelected && styles.optionSelected, align === selectAligns.RIGHT && styles.optionRight]}>
            {props.children}
        </components.Option>
    )

    const Placeholder = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(
        props: PlaceholderProps<Option, IsMulti, Group>
    ) => (
        <components.Placeholder
            {...props}
            css={[styles.placeholder, props.selectProps.isDisabled && styles.disabled, align === selectAligns.RIGHT && styles.textRight]}
        >
            {props.children}
        </components.Placeholder>
    )

    const Input = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(props: InputProps<Option, IsMulti, Group>) => (
        <components.Input {...props} css={align === selectAligns.RIGHT && !autoWidth ? styles.input : undefined} />
    )

    return (
        <Select
            {...rest}
            className={className}
            classNamePrefix='select'
            closeMenuOnScroll={true}
            components={{
                DropdownIndicator,
                Menu,
                MenuList,
                Option,
                SelectContainer,
                SingleValue,
                MultiValue,
                ValueContainer,
                Placeholder,
                Control,
                Input,
                MultiValueLabel,
                MultiValueRemove,
            }}
            css={[(theme) => styles.select(theme, size!, disabled)]}
            defaultValue={defaultValue}
            isDisabled={disabled}
            isMulti={isMulti}
            isSearchable={isSearchable}
            menuIsOpen={menuIsOpen}
            name={name}
            onChange={onChange}
            options={options}
            ref={mergeRefs([ref, localRef]) as any}
            styles={stylesOverride}
            value={value}
        />
    )
})

FormSelect.displayName = 'FormSelect'
FormSelect.defaultProps = defaultProps

export default FormSelect
