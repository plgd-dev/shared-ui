import React from 'react'
import Tile from '../components/new/Tile'
import Tag from '../components/new/Tag'
import Switch from '../components/new/Switch'
import TileRow from '../components/new/Tile/TileRow'

export default {
    title: 'Example/Tile',
    component: Tile,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <Tile {...args} headline='ID'>
            c486781e-f342-46c9-72fd-b740b7e864af
        </Tile>
        <Tile {...args} headline='Types' tags={[<Tag key={1}>oic.d.clouddevice</Tag>, <Tag key={2}>oic.wk.d</Tag>]}></Tile>
        <Tile {...args} headline='Shadow synchronization' right={<Switch {...args} defaultChecked={true} size='big' />}>
            Text here
        </Tile>
    </div>
)

export const Default = Template.bind({})
Default.args = {}

const TemplateTileRow = (args) => (
    <TileRow>
        <Tile {...args} headline='ID'>
            c486781e-f342-46c9-72fd-b740b7e864af
        </Tile>
        <Tile {...args} headline='Types' tags={[<Tag key={1}>oic.d.clouddevice</Tag>, <Tag key={2}>oic.wk.d</Tag>]}></Tile>
        <Tile {...args} headline='Shadow synchronization' right={<Switch {...args} defaultChecked={true} size='big' />}>
            Text here
        </Tile>
    </TileRow>
)

export const TilesRow = TemplateTileRow.bind({})
TilesRow.args = {}
