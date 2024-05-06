import { FC, useEffect, useRef, useState } from 'react'
import { z, ZodTypeAny } from 'zod'
import isFunction from 'lodash/isFunction'

import { PropertiesType, Property, Props } from './GeneratedResourceForm.types'
import FormGenerator, { getHref, sortProperties } from './FormGenerator'
import Loadable from '../../Atomic/Loadable'
import { knownResourceHref } from './constants'

const GeneratedResourceForm: FC<Props> = (props) => {
    const { className, id, i18n, properties, ...rest } = props
    const schema = useRef(z.object({}))
    const [parsing, setParing] = useState(true)

    useEffect(() => {
        let isEditable = false
        const buildZodSchema: any = (properties: PropertiesType, parentHref = '', depth = 1) => {
            const schemaObject: { [key: string]: ZodTypeAny } = {}

            sortProperties(properties).forEach((property: Property & { href: string }) => {
                const href = getHref(parentHref, property.href)
                isEditable = isEditable || !property.readOnly

                if (property.href === knownResourceHref.WELL_KNOW_WOT) {
                    buildZodSchema(property.properties, href, depth)
                }

                switch (property.type) {
                    case 'integer':
                    case 'number':
                        let number = z
                            .number({ message: i18n.invalidNumber })
                            .refine((val) => property.minimum !== undefined && val >= property.minimum, {
                                message: i18n.minValue(property.title, property?.minimum || 0),
                            })
                            .refine((val) => property.maximum !== undefined && val <= property.maximum, {
                                message: i18n.maxValue(property.title, property?.maximum || 0),
                            })

                        schemaObject[href] = number
                        break
                    case 'string':
                        schemaObject[href] = z.string()
                        break
                    case 'boolean':
                        schemaObject[href] = z.boolean()
                        break
                    case 'object':
                        buildZodSchema(property.properties, href, depth + 1)
                        break
                }
            })

            return z.object(schemaObject)
        }

        if (properties) {
            schema.current = buildZodSchema(properties)

            if (isFunction(props.setIsEditable) && !isEditable) {
                props.setIsEditable(isEditable)
            }

            setParing(false)
        }
    }, [i18n, properties, props])

    return (
        <div className={className} id={id}>
            <Loadable condition={!!schema.current && !parsing}>
                <FormGenerator {...rest} i18n={i18n} properties={properties} schema={schema.current} />
            </Loadable>
        </div>
    )
}

GeneratedResourceForm.displayName = 'GeneratedResourceForm'

export default GeneratedResourceForm
