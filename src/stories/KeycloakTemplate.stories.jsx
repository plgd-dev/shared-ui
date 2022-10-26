import React from 'react'
import KeycloakTemplate from '../components/new/Templates/KeycloakTemplate'
import './global.css'
import Swiper from '../components/new/Swiper'
import SwiperTestimonialItem from '../components/new/Swiper/SwiperTestimonialItem'
import SwiperFeatureItem from '../components/new/Swiper/SwiperFeatureItem'

import image1 from './assets/feature-1.jpeg'
import image2 from './assets/feature-2.jpeg'
import image3 from './assets/feature-3.jpeg'
import image from './assets/testimonial-author-image.png'

export default {
    title: 'Keycloakify/KeycloakTemplate',
    component: KeycloakTemplate,
    argTypes: {},
}

const Template = (args) => <KeycloakTemplate {...args} description='%Description text%' formNode={<div>%Form content%</div>} headline='%Headline text%' />

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
    layout: 'fullscreen',
}

const TemplateSwiperTestimonials = (args) => (
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

export const SwiperTestimonials = TemplateSwiperTestimonials.bind({})
Default.args = {}
Default.parameters = {
    layout: 'fullscreen',
}

const TemplateSwiperFeature = (args) => (
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

export const SwiperFeature = TemplateSwiperFeature.bind({})
Default.args = {}
Default.parameters = {
    layout: 'fullscreen',
}
