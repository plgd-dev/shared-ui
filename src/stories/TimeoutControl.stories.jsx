import React, { useState } from 'react'
import TimeoutControl from '../components/new/TimeoutControl'

export default {
    title: 'Example/TimeoutControl',
    component: TimeoutControl,
    argTypes: {},
}

const Template = (args) => {
    const defaultCommandTimeToLive = 10000000000 // 10s
    const [ttl, setTtl] = useState(defaultCommandTimeToLive)
    const [error, setError] = useState(false)
    return (
        <div>
            <TimeoutControl defaultTtlValue={defaultCommandTimeToLive} defaultValue={ttl} onChange={setTtl} onTtlHasError={setError} />
            <br />
            TTL: {ttl}
            <br />
            Error: {error}
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {}
