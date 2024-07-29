import React from 'react'
import Link from '../../components/Atomic/Link'
import FormGroup from '../../components/Atomic/FormGroup'
import FormLabel from '../../components/Atomic/FormLabel'
import FormInput from '../../components/Atomic/FormInput'
import Checkbox from '../../components/Atomic/Checkbox'
import Button from '../../components/Atomic/Button'
import SignInForm from '../../components/Templates/SignInForm'
import '../global.css'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Keycloak/SignInForm',
    component: SignInForm,
    argTypes: {},
}

const Template = (args: any) => (
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

export const Default: StoryFn = Template.bind({})
Default.args = {}

const TemplateSocial = (args: any) => (
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

export const Social: StoryFn = TemplateSocial.bind({})
Social.args = {}

const RegistrationTemplate1 = (args: any) => (
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

export const RegistrationStep1: StoryFn = RegistrationTemplate1.bind({})
RegistrationStep1.args = {}

const RegistrationTemplate2 = (args: any) => (
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

export const RegistrationStep2: StoryFn = RegistrationTemplate2.bind({})
RegistrationStep2.args = {}

const ResetPasswordTemplate = (args: any) => (
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

export const ResetPassword: StoryFn = ResetPasswordTemplate.bind({})
ResetPassword.args = {}
