import React from 'react'
import Header from '../../components/new/Layout/Header'
import UserWidget from '../../components/new/Layout/Header/UserWidget'

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
