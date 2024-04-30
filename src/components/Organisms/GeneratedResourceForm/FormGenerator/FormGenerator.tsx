import { FC, useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { PropertiesType, Property } from '../GeneratedResourceForm.types'
import FormGroup from '../../../Atomic/FormGroup'
import FormLabel from '../../../Atomic/FormLabel'
import FormInput from '../../../Atomic/FormInput'
import IconNumbers from '../../../Atomic/Icon/components/IconNumbers'
import Switch from '../../../Atomic/Switch'
import Spacer from '../../../Atomic/Spacer'
import Headline from '../../../Atomic/Headline'

export const sortProperties = (properties: PropertiesType) => {
    const sortValues = ['string', 'integer', 'number', 'boolean', 'object']
    return Object.keys(properties)
        .map((href: string) => {
            // @ts-ignore
            const property = properties[href] as Property
            return { ...property, href }
        })
        .sort((a, b) => sortValues.indexOf(a.type) - sortValues.indexOf(b.type))
}

export const getHref = (parentHref: string, href: string) => `${parentHref !== '' ? parentHref + '/' : parentHref}${href}`

const FormGenerator: FC<any> = (props) => {
    const { properties, schema } = props

    const [components, setComponents] = useState<JSX.Element[]>([])

    const { control } = useForm({ resolver: zodResolver(schema), mode: 'all', reValidateMode: 'onChange' })

    useEffect(() => {
        const buildProperties: any = (properties: PropertiesType, parentHref = '', depth = 1) =>
            sortProperties(properties).map((property: Property & { href: string }, k) => {
                const href = getHref(parentHref, property.href)
                const key = `${href}-${k}-${depth}-${property.title}`

                if (['string', 'integer', 'number'].includes(property.type)) {
                    const isNumber = ['integer', 'number'].includes(property.type)
                    const formatValue = (value?: string) => (isNumber ? parseInt(value || '0', 10) : value)
                    return (
                        <Controller
                            control={control}
                            defaultValue=''
                            key={key}
                            name={href}
                            render={({ field }) => (
                                <FormGroup error={false} id={property.title}>
                                    <FormLabel text={property.title} />
                                    <FormInput
                                        icon={isNumber ? <IconNumbers /> : undefined}
                                        name={field.name}
                                        onChange={field.onChange}
                                        type={isNumber ? 'number' : 'text'}
                                        value={isNumber ? formatValue(field.value) : field.value}
                                    />
                                </FormGroup>
                            )}
                        />
                    )
                } else if (property.type === 'boolean') {
                    return (
                        <Controller
                            control={control}
                            defaultValue=''
                            key={key}
                            name={href}
                            render={({ field }) => (
                                <FormGroup error={false} id={property.title} key={key}>
                                    <FormLabel text={property.title} />
                                    <Switch checked={field.value} key={`${key}-input`} name={field.name} onChange={field.onChange} />
                                </FormGroup>
                            )}
                        />
                    )
                } else if (property.type === 'object') {
                    return (
                        <Spacer key={key} type='mb-5 mt-8'>
                            <Spacer type='mb-4'>
                                <Headline type='h5'>{property.title}</Headline>
                            </Spacer>
                            <Spacer type={`pl-${5 * depth}`}>{buildProperties(property.properties, href, depth + 1)}</Spacer>
                        </Spacer>
                    )
                } else {
                    return <div />
                }
            })

        if (properties) {
            setComponents(buildProperties(properties))
        }
    }, [control, properties])

    return <div>{components}</div>
}

FormGenerator.displayName = 'FormGenerator'

export default FormGenerator
