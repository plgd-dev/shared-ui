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
                        <FormInput copy={true} name='subject_id' placeholder='Subject ID' />
                    </FormGroup>
                    <FormGroup id='key'>
                        <FormLabel text='Key' />
                        <FormInput copy={true} name='Key' placeholder='Key' type='password' />
                    </FormGroup>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
                        <Button variant='tertiary'>Generate random data</Button>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Button fullWidth={true} size='big' variant='primary'>
                            Main CTA Action
                        </Button>
                    </div>
                </form>
            }
            headline='Headline'
        />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
    layout: 'fullscreen',
}

const TemplateRight = (args) => (
    <div>
        <Popup
            {...args}
            description='Description line here...'
            formNode={
                <form action=''>
                    <FormGroup id='subject_id'>
                        <FormLabel text='Subject ID' />
                        <FormInput copy={true} defaultValue='376ee947-4801-5cfe-3a8f-49103697f11' name='subject_id' placeholder='Subject ID' />
                    </FormGroup>
                    <FormGroup id='key'>
                        <FormLabel text='Key' />
                        <FormInput copy={true} defaultValue='123 bla bla 123' name='Key' placeholder='Key' type='password' />
                    </FormGroup>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
                        <Button variant='tertiary'>Generate random data</Button>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Button fullWidth={true} size='big' variant='primary'>
                            Main CTA Action
                        </Button>
                    </div>
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
Right.parameters = {
    layout: 'fullscreen',
}
