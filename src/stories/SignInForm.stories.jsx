import React from 'react'
import Link from '../components/new/Link'
import FormGroup from '../components/new/FormGroup'
import FormLabel from '../components/new/FormLabel'
import FormInput from '../components/new/FormInput'
import Checkbox from '../components/new/Checkbox'
import Button from '../components/new/Button'
import SignInForm from '../components/new/Templates/SignInForm'
import './global.css'

export default {
    title: 'Templates/SignInForm',
    component: SignInForm,
    argTypes: {},
}

const Template = (args) => (
    <div id='center'>
        <div
            style={{
                maxWidth: 500,
            }}
        >
            <SignInForm
                {...args}
                actions={[
                    <FormGroup id='keep-signed-in' marginBottom={false}>
                        <Checkbox label='Keep me signed in' />
                    </FormGroup>,
                    <Link>Forgot password</Link>,
                ]}
                cta={
                    <Button fullWidth={true} size='big' variant='primary'>
                        Sign In
                    </Button>
                }
                inputs={[
                    <FormGroup id='email'>
                        <FormLabel text='E-mail' />
                        <FormInput defaultValue='' />
                    </FormGroup>,
                    <FormGroup id='password' marginBottom={false}>
                        <FormLabel text='Password' />
                        <FormInput defaultValue='' type='password' />
                    </FormGroup>,
                ]}
            />
        </div>
    </div>
)

export const Default = Template.bind({})
Default.args = {}
