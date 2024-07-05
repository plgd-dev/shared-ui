import ConditionFilter from '../../components/Organisms/ConditionFilter'
import { Meta, StoryObj } from '@storybook/react'
import React, { useMemo, useState } from 'react'
import StatusTag from '../../components/Atomic/StatusTag'
import FormGroup from '../../components/Atomic/FormGroup'
import FormLabel from '../../components/Atomic/FormLabel'
import FormSelect from '../../components/Atomic/FormSelect'
import { OptionType } from '../../components/Atomic/FormSelect/FormSelect.types'
import FormInput from '../../components/Atomic/FormInput'
import Button from '../../components/Atomic/Button'
import IconPlus from '../../components/Atomic/Icon/components/IconPlus'

export default {
    argTypes: {},
    component: ConditionFilter,
    title: 'Organism/ConditionFilter',
} as Meta<typeof ConditionFilter>

type Story = StoryObj<typeof ConditionFilter>

const FormSelectConditionFilter = () => {
    const [items, setItems] = useState<string[]>([])

    const [options, setOptions] = useState<OptionType[]>([
        { value: 'device-1', label: 'Device 1' },
        { value: 'device-2', label: 'Device 2' },
        { value: 'device-3', label: 'Device 3' },
        { value: 'device-4', label: 'Device 4' },
        { value: 'device-5', label: 'Device 5' },
    ])

    const value = useMemo(() => items.map((id: string) => options?.find((o) => o.value === id) || { value: id, label: id }), [items, options])

    return (
        <ConditionFilter
            listName='List of Selected Item'
            listOfItems={items.map((id) => options?.find((o) => o.value === id)?.label || id)}
            onItemDelete={(key) => {
                const newItems = items.filter((_, i) => i !== key)
                setItems(newItems)
            }}
            status={
                <StatusTag lowercase={false} variant={items.length > 0 ? 'success' : 'normal'}>
                    {items.length > 0 ? 'Set up' : 'Not set'}
                </StatusTag>
            }
            title='FormSelect'
        >
            <FormGroup id='items'>
                <FormLabel text='Select Item' />
                <FormSelect
                    checkboxOptions
                    creatable
                    isMulti
                    footerLinksLeft={[
                        {
                            title: 'Reset',
                            onClick: () => {
                                setItems([])
                            },
                        },
                        {
                            title: 'Done',
                            variant: 'primary',
                            onClick: (values: OptionType[]) => {
                                const rawValue = values.map((v) => v.value.toString())
                                setItems(rawValue)
                            },
                        },
                    ]}
                    i18n={{
                        itemSelected: 'Item selected',
                        itemsSelected: 'Items selected',
                    }}
                    menuPortalTarget={document.body}
                    menuZIndex={100}
                    name='items'
                    onChange={(values: OptionType[]) => {
                        const rawValue = values.map((v) => v.value.toString())
                        setItems(rawValue)
                    }}
                    onCreateOption={(value: string | number) => {
                        setOptions((prev) => [...prev, { value: value.toString(), label: value.toString() }])
                    }}
                    options={options}
                    placeholder='Select or Create'
                    value={value}
                />
            </FormGroup>
        </ConditionFilter>
    )
}

const FormInputConditionFilter = () => {
    const [items, setItems] = useState<string[]>([])
    const [value, setValue] = useState<string>('')

    return (
        <ConditionFilter
            listName='List of selected Items'
            listOfItems={items}
            onItemDelete={(key) => {
                const newVal = items?.filter((_, i) => i !== key)
                setItems(newVal)
            }}
            status={
                <StatusTag lowercase={false} variant={items?.length > 0 ? 'success' : 'normal'}>
                    {items?.length > 0 ? 'Set up' : 'Not set'}
                </StatusTag>
            }
            title='FormInput'
        >
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                <FormGroup id='resourceTypeFilter' marginBottom={false} style={{ flex: '1 1 auto' }}>
                    <FormLabel text='Add manual data' />
                    <FormInput
                        compactFormComponentsView={false}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter' && e.target.value !== '') {
                                e.preventDefault()
                                const newVal = [...items, e.target.value]
                                setItems(newVal)
                                setValue('')
                            }
                        }}
                        value={value}
                    />
                </FormGroup>
                <Button
                    disabled={value === ''}
                    icon={<IconPlus />}
                    onClick={() => {
                        const newVal = [...items, value]
                        setItems(newVal)
                        setValue('')
                    }}
                    size='small'
                    style={{
                        position: 'relative',
                        bottom: '2px',
                    }}
                    variant='secondary'
                >
                    Add
                </Button>
            </div>
        </ConditionFilter>
    )
}

const FormInputSingleConditionFilter = () => {
    const [value, setValue] = useState('')
    return (
        <ConditionFilter
            listName='Selected'
            status={
                <StatusTag lowercase={false} variant={value !== '' ? 'success' : 'normal'}>
                    {value !== '' ? 'Set up' : 'Not set'}
                </StatusTag>
            }
            title='FormInput single'
        >
            <FormGroup id='jqExpressionFilter'>
                <FormLabel text='Add manual data' />
                <FormInput
                    compactFormComponentsView={false}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault()
                            setValue(e.target.value)
                        }
                    }}
                    value={value}
                />
            </FormGroup>
        </ConditionFilter>
    )
}

export const Default: Story = {
    args: {},
    parameters: {
        layout: 'fullscreen',
    },
    render: (args) => (
        <div
            style={{
                margin: '50px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}
        >
            <FormSelectConditionFilter />
            <FormInputConditionFilter />
            <FormInputSingleConditionFilter />
        </div>
    ),
}
