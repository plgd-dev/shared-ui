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
import CreatableSelect from 'react-select/creatable'
import { mergeRefs } from 'react-merge-refs'
import { Theme } from '@emotion/react'

import { Props, defaultProps, OptionType } from './FormSelect.types'
import * as styles from './FormSelect.styles'
import { convertSize, IconTableArrowDown } from '../Icon'
import { selectAligns, selectSizes } from './constants'
import IconCloseX from '../Icon/components/IconCloseX'
import Checkbox from '../Checkbox'
import Spacer from '../Spacer'
import Show from '../Show'

const FormSelect = forwardRef<any, Props>((props, ref) => {
    const {
        align,
        autoWidth,
        className,
        checkboxOptions,
        creatable,
        dataTestId,
        defaultValue,
        error,
        disabled,
        inlineStyle,
        footerLinksLeft,
        footerLinksRight,
        i18n,
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
    ) => {
        let [values, input] = props.children as any
        const { itemSelected, itemsSelected } = i18n || {}

        if (Array.isArray(values)) {
            const plural = values.length === 1 ? '' : 's'
            values = `${values.length} ${plural ? itemsSelected : itemSelected}`
        }

        return (
            <components.ValueContainer
                {...props}
                css={[
                    styles.valueContainer,
                    checkboxOptions && styles.valueContainerCheckbox,
                    props.isMulti && styles.valueContainerMulti,
                    align === selectAligns.RIGHT && props.isMulti && styles.valueContainerMultiRight,
                ]}
            >
                <Show>
                    <Show.When isTrue={!!checkboxOptions}>
                        {input}
                        <span style={{ flex: '1 1 auto', textAlign: 'right' }}>{values}</span>
                    </Show.When>
                    <Show.Else>{props.children}</Show.Else>
                </Show>
            </components.ValueContainer>
        )
    }

    const SelectContainer = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(
        props: ContainerProps<Option, IsMulti, Group>
    ) => (
        <components.SelectContainer {...props} css={[autoWidth ? styles.selectAutoWidthContainer : styles.selectContainer]} data-test-id={dataTestId}>
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
        <components.MultiValueRemove {...props} css={styles.multiValueRemove}>
            <IconCloseX />
        </components.MultiValueRemove>
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
            {(!!footerLinksLeft || !!footerLinksRight) && (
                <div css={styles.footerComponent}>
                    {footerLinksLeft && (
                        <div css={styles.footerLinks}>
                            {footerLinksLeft.map((link, key) => (
                                <a
                                    css={[styles.footerLink, link.variant && styles.footerLinkPrimary]}
                                    data-test-id={link.dataTestId}
                                    href='#'
                                    key={key}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        props.clearValue()
                                        localRef.current.blur()
                                        link.onClick(props.getValue())
                                    }}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    )}
                    {footerLinksRight && (
                        <div css={styles.footerLinks}>
                            {footerLinksRight.map((link, key) => (
                                <a
                                    css={styles.footerLink}
                                    data-test-id={link.dataTestId}
                                    href='#'
                                    key={key}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        props.clearValue()
                                        localRef.current.blur()
                                        link.onClick(props.getValue())
                                    }}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </components.Menu>
    )

    const MenuList = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(props: MenuListProps<Option, IsMulti, Group>) => (
        <components.MenuList {...props} css={styles.menuList} maxHeight={footerLinksLeft || footerLinksRight ? props.maxHeight - 54 : props.maxHeight}>
            {props.children}
        </components.MenuList>
    )

    const Option = <Option extends OptionType, IsMulti extends boolean, Group extends GroupBase<Option>>(props: OptionProps<Option, IsMulti, Group>) => (
        <components.Option {...props} css={[styles.option, props.isSelected && styles.optionSelected, align === selectAligns.RIGHT && styles.optionRight]}>
            {checkboxOptions && (
                <Spacer dataTestId={dataTestId?.concat(`-${props?.data?.value?.toString() || ''}`)} type='pr-2'>
                    <Checkbox checked={props.isSelected} name='' onChange={() => {}} />
                </Spacer>
            )}
            <span data-test-id={checkboxOptions ? undefined : dataTestId?.concat(`-${props?.data?.value?.toString() || ''}`)}>{props.children}</span>
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
        <components.Input {...props} css={align === selectAligns.RIGHT && !autoWidth ? styles.input : undefined} data-test-id={dataTestId?.concat('-input')} />
    )

    const properties = {
        ...rest,
        className,
        classNamePrefix: 'select',
        closeMenuOnScroll: !checkboxOptions,
        closeMenuOnSelect: !checkboxOptions,
        components: {
            DropdownIndicator,
            Menu,
            MenuList,
            Option,
            SelectContainer: checkboxOptions ? components.SelectContainer : SelectContainer,
            SingleValue,
            MultiValue,
            ValueContainer,
            Placeholder,
            Control: checkboxOptions ? components.Control : Control,
            Input,
            MultiValueLabel,
            MultiValueRemove,
        },
        css: [(theme: Theme) => styles.select(theme, size!, disabled)],
        defaultValue,
        hideSelectedOptions: !checkboxOptions,
        isDisabled: disabled,
        isMulti,
        isSearchable,
        menuIsOpen,
        name,
        onChange,
        options,
        ref: mergeRefs([ref, localRef]) as any,
        styles: stylesOverride,
        value,
    }

    if (creatable) {
        return <CreatableSelect {...properties} />
    }

    return <Select {...properties} />
})

FormSelect.displayName = 'FormSelect'

export default FormSelect
