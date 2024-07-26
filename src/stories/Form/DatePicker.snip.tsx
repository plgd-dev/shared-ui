import React, { useState } from 'react'

import FormLabel from '../../components/Atomic/FormLabel'
import DatePicker from '../../components/Atomic/DatePicker'
import FormGroup from '../../components/Atomic/FormGroup'

export default (args: any) => {
    const [pickedExpiration, setPickedExpiration] = useState(new Date())
    const [pickedExpiration2, setPickedExpiration2] = useState(new Date())
    return (
        <div>
            <FormGroup compactFormComponentsView={false} id='expirationDate'>
                <FormLabel text='Expiration date' />
                <DatePicker {...args} minDate={new Date()} onChange={(d: Date) => setPickedExpiration(d)} />
            </FormGroup>
            <div>pickedExpiration: {pickedExpiration.toISOString()}</div>
            <br />
            <br />
            <br />
            <FormGroup compactFormComponentsView={false} id='expirationDate'>
                <FormLabel text='Expiration date' />
                <DatePicker
                    {...args}
                    bottomButtons
                    i18n={{
                        clear: 'Clear',
                        confirm: 'Confirm',
                    }}
                    minDate={new Date()}
                    onChange={(d: Date) => setPickedExpiration2(d)}
                />
            </FormGroup>
            <div>pickedExpiration: {pickedExpiration2.toISOString()}</div>
        </div>
    )
}
