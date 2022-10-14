import React from 'react'
import Popup from '../components/new/Popup/Popup'
import FormGroup from '../components/new/FormGroup'
import FormLabel from '../components/new/FormLabel'
import FormInput from '../components/new/FormInput'
import Button from '../components/new/Button'

export default {
    title: 'Example/Popup',
    component: Popup,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <Popup
            {...args}
            description='Description line here...'
            formNode={
                <form action=''>
                    <FormGroup id='subject_id'>
                        <FormLabel text='Subject ID' />
                        <FormInput name='subject_id' placeholder='Subject ID' />
                    </FormGroup>
                    <FormGroup id='key'>
                        <FormLabel text='Key' />
                        <FormInput name='Key' placeholder='Key' />
                    </FormGroup>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
                        <Button variant='tertiary'>Generate random data</Button>
                    </div>
                    <Button fullWidth={true} size='big' variant='primary'>
                        Main CTA Action
                    </Button>
                </form>
            }
            headline='Headline'
        />
    </div>
)

export const Default = Template.bind({})
Default.args = {}

const TemplateRight = (args) => (
    <div>
        <Popup
            {...args}
            description='Description line here...'
            formNode={
                <form action=''>
                    <FormGroup id='subject_id'>
                        <FormLabel text='Subject ID' />
                        <FormInput name='subject_id' placeholder='Subject ID' />
                    </FormGroup>
                    <FormGroup id='key'>
                        <FormLabel text='Key' />
                        <FormInput name='Key' placeholder='Key' />
                    </FormGroup>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
                        <Button variant='tertiary'>Generate random data</Button>
                    </div>
                    <Button fullWidth={true} size='big' variant='primary'>
                        Main CTA Action
                    </Button>
                </form>
            }
            headline='Headline'
            right={{
                headline: 'Reminder',
                text:
                    'Please copy your pre-shared\n' +
                    "key and store it securely. If you reinstall your application and you won't initialize it with the same\n" +
                    "Pre-shared Key, devices you previously owned won't be accessible and the factory reset\n" +
                    'on these devices will need to be executed.',
            }}
        />
    </div>
)

export const Right = TemplateRight.bind({})
Right.args = {}
