import React, { useState } from 'react'
import TimeoutControl from '../components/Atomic/TimeoutControl'

export default {
    title: 'Example/TimeoutControl',
    component: TimeoutControl,
    argTypes: {},
}

const Template = (args) => {
    const defaultCommandTimeToLive = 10000000000 // 10s
    const [ttl, setTtl] = useState(defaultCommandTimeToLive)
    const [ttl2, setTtl2] = useState(defaultCommandTimeToLive)
    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)
    return (
        <div>
            <TimeoutControl
                defaultTtlValue={defaultCommandTimeToLive}
                defaultValue={ttl}
                i18n={{
                    default: 'default',
                    duration: 'duration',
                    placeholder: 'placeholder',
                    unit: 'unit',
                }}
                onChange={setTtl}
                onTtlHasError={setError}
            />
            <br />
            TTL: {ttl}
            <br />
            Error: {error}
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />
            <TimeoutControl
                defaultTtlValue={defaultCommandTimeToLive}
                defaultValue={ttl2}
                i18n={{
                    default: 'default',
                    duration: 'duration',
                    placeholder: 'placeholder',
                    unit: 'unit',
                }}
                onChange={setTtl2}
                onTtlHasError={setError2}
                watchUnitChange={true}
            />
            <br />
            TTL: {ttl2}
            <br />
            Error: {error2}
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {}
