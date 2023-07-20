import React from 'react'
import Header from '../../components/Layout/Header'
import UserWidget from '../../components/Layout/Header/UserWidget'
import Breadcrumbs from '../../components/Layout/Header/Breadcrumbs'

import roman from '../assets/roman.png'

export default {
    title: 'Layout/Header',
    component: Header,
    argTypes: {},
}

const Template = (args) => (
    <div style={{ background: '#ccc', height: '100%' }}>
        <Header userWidget={<UserWidget description='2nd line' image={<img alt='roman' src={roman} />} name='Janko Hraško' />} />
    </div>
)

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
    layout: 'fullscreen',
}

const TemplateBreadcrumbs = (args) => (
    <div style={{ background: '#ccc', height: '100%' }}>
        <Header
            breadcrumbs={<Breadcrumbs items={[{ label: 'Devices', link: 'devices' }, { label: ' August Doorbell Cam' }]} />}
            userWidget={<UserWidget description='2nd line' image={<img alt='roman' src={roman} />} name='Janko Hraško' />}
        />
    </div>
)

export const Breadcrumb = TemplateBreadcrumbs.bind({})
Breadcrumb.args = {}
Breadcrumb.parameters = {
    layout: 'fullscreen',
}
