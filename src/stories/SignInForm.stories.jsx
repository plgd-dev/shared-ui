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
                maxWidth: 400,
                width: '100%',
                border: '1px dashed #ccc',
                padding: 40,
            }}
        >
            <SignInForm
                {...args}
                actions={[
                    <FormGroup id='keep-signed-in' marginBottom={false}>
                        <Checkbox label='Keep me signed in' name='keep-signed-in' />
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
                        <FormInput defaultValue='' name='email' />
                    </FormGroup>,
                    <FormGroup id='password' marginBottom={false}>
                        <FormLabel text='Password' />
                        <FormInput defaultValue='' name='password' type='password' />
                    </FormGroup>,
                ]}
            />
        </div>
    </div>
)

export const Default = Template.bind({})
Default.args = {}

const TemplateSocial = (args) => (
    <div id='center'>
        <div
            style={{
                maxWidth: 400,
                width: '100%',
                border: '1px dashed #ccc',
                padding: 40,
            }}
        >
            <SignInForm
                {...args}
                actions={[
                    <FormGroup id='keep-signed-in' marginBottom={false}>
                        <Checkbox label='Keep me signed in' name='keep-signed-in' />
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
                        <FormInput defaultValue='' name='password' />
                    </FormGroup>,
                    <FormGroup id='password' marginBottom={false}>
                        <FormLabel text='Password' />
                        <FormInput defaultValue='' name='password' type='password' />
                    </FormGroup>,
                ]}
                socialProviders={[
                    {
                        providerId: 'apple',
                        loginUrl: '/',
                        alias: 'apple',
                        displayName: 'Apple',
                    },
                    {
                        providerId: 'google',
                        loginUrl: '/',
                        alias: 'google',
                        displayName: 'Google',
                    },
                    {
                        providerId: 'github',
                        loginUrl: '/',
                        alias: 'github',
                        displayName: 'Github',
                    },
                ]}
            />
        </div>
    </div>
)

export const Social = TemplateSocial.bind({})
Social.args = {}

const RegistrationTemplate1 = (args) => (
    <div id='center'>
        <div
            style={{
                maxWidth: 400,
                width: '100%',
                border: '1px dashed #ccc',
                padding: 40,
            }}
        >
            <SignInForm
                {...args}
                cta={
                    <Button fullWidth={true} size='big' variant='primary'>
                        Continue
                    </Button>
                }
                inputs={[
                    <FormGroup id='email' marginBottom={false}>
                        <FormLabel text='E-mail' />
                        <FormInput defaultValue='' name='email' />
                    </FormGroup>,
                ]}
                terms={
                    <div>
                        By continuing, you agree to PLGD <a href='#'>Terms of Use</a> and you confirm you have read PLGD <a href='#'>Privacy Policy</a>.
                    </div>
                }
            />
        </div>
    </div>
)

export const RegistrationStep1 = RegistrationTemplate1.bind({})
RegistrationStep1.args = {}

const RegistrationTemplate2 = (args) => (
    <div id='center'>
        <div
            style={{
                maxWidth: 400,
                width: '100%',
                border: '1px dashed #ccc',
                padding: 40,
            }}
        >
            <SignInForm
                {...args}
                actions={[
                    <FormGroup id='keep-signed-in' marginBottom={false}>
                        <Checkbox
                            label='Sure, send me insightful product news, and occasional offers by email. I know I can unsubscribe at any time.'
                            name='keep-signed-in'
                        />
                    </FormGroup>,
                ]}
                cta={
                    <Button fullWidth={true} size='big' variant='primary'>
                        Finish registration
                    </Button>
                }
                footerActions={false}
                inputs={[
                    <FormGroup id='fullname'>
                        <FormLabel text='Full name' />
                        <FormInput defaultValue='' name='fullname' />
                    </FormGroup>,
                    <FormGroup id='companyName' marginBottom={false}>
                        <FormLabel text='Company name (optional)' />
                        <FormInput defaultValue='' name='companyName' />
                    </FormGroup>,
                ]}
            />
        </div>
    </div>
)

export const RegistrationStep2 = RegistrationTemplate2.bind({})
RegistrationStep2.args = {}

const ResetPasswordTemplate = (args) => (
    <div id='center'>
        <div
            style={{
                maxWidth: 400,
                width: '100%',
                border: '1px dashed #ccc',
                padding: 40,
            }}
        >
            <SignInForm
                {...args}
                cta={[
                    <Button size='big' variant='tertiary'>
                        Back
                    </Button>,
                    <Button fullWidth={true} size='big' variant='primary'>
                        Submit
                    </Button>,
                ]}
                footerActions={false}
                inputs={[
                    <FormGroup id='username' marginBottom={false}>
                        <FormLabel text='E-mail' />
                        <FormInput autoFocus={true} name='username' />
                    </FormGroup>,
                ]}
            />
        </div>
    </div>
)

export const ResetPassword = ResetPasswordTemplate.bind({})
ResetPassword.args = {}
