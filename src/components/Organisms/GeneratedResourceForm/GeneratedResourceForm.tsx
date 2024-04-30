import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { z } from 'zod'

import { PropertiesType, Property, Props } from './GeneratedResourceForm.types'
import Spacer from '../../Atomic/Spacer'
import Headline from '../../Atomic/Headline'
import FormGenerator, { getHref, sortProperties } from './FormGenerator'
import Loadable from '../../Atomic/Loadable'

const GeneratedResourceForm: FC<Props> = (props) => {
    const { className, id, i18n, properties } = props
    const schema = useRef(z.object({}))
    const [parsing, setParing] = useState(true)

    useEffect(() => {
        const buildZodSchema: any = (properties: PropertiesType, parentHref = '', depth = 1) =>
            sortProperties(properties).forEach((property: Property & { href: string }, k) => {
                const href = getHref(parentHref, property.href)

                if (!schema.current) {
                    schema.current = z.object({})
                }

                if (['integer', 'number'].includes(property.type)) {
                    const number = z.number()

                    if (property.minimum) {
                        number.min(property?.minimum || 0, { message: i18n.minLength(property.title, property?.minimum || 0) })
                    }

                    schema.current = schema.current.merge(z.object({ [href]: number }))
                } else if (property.type === 'string') {
                    schema.current = schema.current.merge(z.object({ [href]: z.string() }))
                } else if (property.type === 'boolean') {
                    schema.current = schema.current.merge(z.object({ [href]: z.boolean() }))
                } else if (property.type === 'object') {
                    return buildZodSchema(property.properties, href, depth + 1)
                }
            })

        if (properties) {
            buildZodSchema(properties)
            setParing(false)
        }
    }, [i18n, properties])

    const hasGeneralHeadline = useMemo(() => properties && Object.values(properties).some((property) => !property.hasOwnProperty('properties')), [properties])

    return (
        <div className={className} id={id}>
            {hasGeneralHeadline && (
                <Spacer type='mb-4 mt-8'>
                    <Headline type='h5'>{i18n.general}</Headline>
                </Spacer>
            )}
            <Loadable condition={!!schema.current && !parsing}>
                <FormGenerator properties={properties} schema={schema.current} />
            </Loadable>
        </div>
    )
}

GeneratedResourceForm.displayName = 'GeneratedResourceForm'

export default GeneratedResourceForm
