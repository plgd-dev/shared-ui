import React from 'react'
import KeycloakTemplate from '../components/Templates/KeycloakTemplate'
import './global.css'
import Swiper from '../components/Atomic/Swiper'
import SwiperTestimonialItem from '../components/Atomic/Swiper/SwiperTestimonialItem'
import SwiperFeatureItem from '../components/Atomic/Swiper/SwiperFeatureItem'

import image1 from './assets/feature-1.jpeg'
import image2 from './assets/feature-2.jpeg'
import image3 from './assets/feature-3.jpeg'
import image from './assets/testimonial-author-image.png'
import FormGroup from '../components/Atomic/FormGroup'
import Checkbox from '../components/Atomic/Checkbox'
import Link from '../components/Atomic/Link'
import Button from '../components/Atomic/Button'
import FormLabel from '../components/Atomic/FormLabel'
import FormInput from '../components/Atomic/FormInput'
import SignInForm from '../components/Templates/SignInForm'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Keycloakify/KeycloakTemplate',
    component: KeycloakTemplate,
    argTypes: {},
}

const Template = (args: any) => <KeycloakTemplate {...args} description='%Description text%' formNode={<div>%Form content%</div>} headline='%Headline text%' />

export const Default: StoryFn = Template.bind({})
Default.args = {}
Default.parameters = {
    layout: 'fullscreen',
}

const TemplateSwiperTestimonials = (args: any) => (
    <KeycloakTemplate
        {...args}
        description='%Description text%'
        formNode={<div>%Form content%</div>}
        headline='%Headline text%'
        leftBottomNode={
            <Swiper
                slides={[
                    <SwiperTestimonialItem
                        author={{
                            image,
                            name: 'Dharmendra Naik',
                            position: 'System Architecutre at Infinera',
                        }}
                        text='PLGD gives us a cloud native framework to control our optical modules. Building blocks support deployment options from network host controller to public cloud, and its scaleable.'
                    />,
                    <SwiperTestimonialItem
                        author={{
                            image,
                            name: 'Dharmendra Naik',
                            position: 'System Architecutre at Infinera',
                        }}
                        text='PLGD gives us a cloud native framework to control our optical modules. Building blocks support deployment options from network host controller to public cloud, and its scaleable.'
                    />,
                    <SwiperTestimonialItem
                        author={{
                            image,
                            name: 'Dharmendra Naik',
                            position: 'System Architecutre at Infinera',
                        }}
                        text='PLGD gives us a cloud native framework to control our optical modules. Building blocks support deployment options from network host controller to public cloud, and its scaleable.'
                    />,
                ]}
            />
        }
    />
)

export const SwiperTestimonials: StoryFn = TemplateSwiperTestimonials.bind({})
SwiperTestimonials.args = {}
SwiperTestimonials.parameters = {
    layout: 'fullscreen',
}

const TemplateSwiperFeature = (args: any) => (
    <KeycloakTemplate
        {...args}
        description='%Description text%'
        formNode={<div>%Form content%</div>}
        headline='%Headline text%'
        leftCenterNode={
            <Swiper
                slides={[
                    <SwiperFeatureItem
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam'
                        image={image1}
                        imageAlt='1'
                        name='The name of the functionality 1'
                    />,
                    <SwiperFeatureItem
                        description='Lorem ipsum dolor sit amet, conPsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam'
                        image={image2}
                        imageAlt='2'
                        name='The name of the functionality 2'
                    />,
                    <SwiperFeatureItem
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam'
                        image={image3}
                        imageAlt='3'
                        name='The name of the functionality 3'
                    />,
                ]}
            />
        }
    />
)

export const SwiperFeature: StoryFn = TemplateSwiperFeature.bind({})
SwiperFeature.args = {}
SwiperFeature.parameters = {
    layout: 'fullscreen',
}

const TemplateSignIn = (args: any) => (
    <KeycloakTemplate
        {...args}
        description={
            <span>
                Not a member? <a href='#'>Sign up now</a>
            </span>
        }
        formNode={
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
        }
        headline='Sign in to PLGD'
        leftCenterNode={
            <Swiper
                slides={[
                    <SwiperFeatureItem
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam'
                        image={image1}
                        imageAlt='1'
                        name='The name of the functionality 1'
                    />,
                    <SwiperFeatureItem
                        description='Lorem ipsum dolor sit amet, conPsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam'
                        image={image2}
                        imageAlt='2'
                        name='The name of the functionality 2'
                    />,
                    <SwiperFeatureItem
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam'
                        image={image3}
                        imageAlt='3'
                        name='The name of the functionality 3'
                    />,
                ]}
            />
        }
    />
)

export const SignIn: StoryFn = TemplateSignIn.bind({})
SignIn.args = {}
SignIn.parameters = {
    layout: 'fullscreen',
}

const TemplateUpdatePassword = (args: any) => (
    <KeycloakTemplate
        {...args}
        activeStep={2}
        description='Update your password'
        displayMessage={true}
        formNode={
            <SignInForm
                {...args}
                cta={
                    <Button fullWidth={true} size='big' variant='primary'>
                        Submit
                    </Button>
                }
                inputs={[
                    <FormGroup id='password-new' key='2'>
                        <FormLabel text='Password' />
                        <FormInput autoComplete='new-password' autoFocus={true} name='password-new' type='password' />
                    </FormGroup>,
                    <FormGroup id='password-confirm' key='3'>
                        <FormLabel text='Password' />
                        <FormInput autoComplete='new-password' name='password-confirm' type='password' />
                    </FormGroup>,
                ]}
            />
        }
        headline='Sign in to PLGD'
        leftCenterNode={
            <Swiper
                slides={[
                    <SwiperFeatureItem
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam'
                        image={image1}
                        imageAlt='1'
                        name='The name of the functionality 1'
                    />,
                    <SwiperFeatureItem
                        description='Lorem ipsum dolor sit amet, conPsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam'
                        image={image2}
                        imageAlt='2'
                        name='The name of the functionality 2'
                    />,
                    <SwiperFeatureItem
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam'
                        image={image3}
                        imageAlt='3'
                        name='The name of the functionality 3'
                    />,
                ]}
            />
        }
        steps={['Email', 'Basic info', 'Password']}
    />
)

export const UpdatePassword: StoryFn = TemplateUpdatePassword.bind({})
UpdatePassword.args = {}
UpdatePassword.parameters = {
    layout: 'fullscreen',
}
