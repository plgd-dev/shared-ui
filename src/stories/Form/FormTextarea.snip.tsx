import React from 'react'

import FormTextarea from '../../components/Atomic/FormTextarea'
import FormGroup from '../../components/Atomic/FormGroup'
import FormLabel from '../../components/Atomic/FormLabel'

export default (args?: any) => (
    <div>
        <FormTextarea {...args} />
        <br />
        <br />
        <FormGroup id='textarea'>
            <FormLabel text='Textarea' />
            <FormTextarea {...args} />
        </FormGroup>
    </div>
)
