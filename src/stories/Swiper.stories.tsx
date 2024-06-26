import React from 'react'

import Swiper from '../components/Atomic/Swiper'
import SwiperFeatureItem from '../components/Atomic/Swiper/SwiperFeatureItem'
import SwiperTestimonialItem from '../components/Atomic/Swiper/SwiperTestimonialItem'
import image1 from './assets/feature-1.jpeg'
import image2 from './assets/feature-2.jpeg'
import image3 from './assets/feature-3.jpeg'
import { colors } from '../components/Atomic/_utils/colors'
import image from './assets/testimonial-author-image.png'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Example/Swiper',
    component: Swiper,
    argTypes: {},
}

const TemplateFeature = (args: any) => (
    <div id='center'>
        <div
            style={{
                width: 500,
                background: colors.primary,
            }}
        >
            <div
                style={{
                    width: 400,
                    padding: 40,
                    margin: 'auto',
                }}
            >
                <Swiper
                    {...args}
                    slides={[
                        <SwiperFeatureItem
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam'
                            image={image1}
                            imageAlt='1'
                            name='The name of the functionality 1'
                        />,
                        <SwiperFeatureItem
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
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
            </div>
        </div>
    </div>
)

export const Feature: StoryFn = TemplateFeature.bind({})
Feature.args = {}

const TemplateTestimonial = (args: any) => (
    <div id='center'>
        <div
            style={{
                width: 500,
                background: colors.primary,
            }}
        >
            <div
                style={{
                    width: 400,
                    padding: 40,
                    margin: 'auto',
                }}
            >
                <Swiper
                    {...args}
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
            </div>
        </div>
    </div>
)

export const Testimonial: StoryFn = TemplateTestimonial.bind({})
Testimonial.args = {}
