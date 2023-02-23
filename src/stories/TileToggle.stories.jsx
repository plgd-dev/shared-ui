import React, { useState } from 'react'
import TileToggle from '../components/new/TileToggle'
import Tag from '../components/new/Tag'
import Switch from '../components/new/Switch'
import TileToggleRow from '../components/new/TileToggle/TileToggleRow'

export default {
    title: 'Example/TileToggle',
    component: TileToggle,
    argTypes: {},
}

const Template = (args) => {
    const [state, setState] = useState({
        tile1: false,
        tile2: false,
        tile3: false,
    })
    return (
        <div>
            <TileToggle {...args} name='Twin state' checked={state.tile1} onChange={() => setState({ ...state, tile1: !state.tile1 })} />
            <TileToggle {...args} name='Subscribe & notify' checked={state.tile2} onChange={() => setState({ ...state, tile2: !state.tile2 })} />
            <TileToggle {...args} name='Logging' checked={state.tile3} onChange={() => setState({ ...state, tile3: !state.tile3 })} />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {}

const TemplateTileRow = (args) => {
    const [state, setState] = useState({
        tile1: false,
        tile2: false,
        tile3: false,
    })
    return (
        <TileToggleRow>
            <TileToggle {...args} name='Twin state' checked={state.tile1} onChange={() => setState({ ...state, tile1: !state.tile1 })} />
            <TileToggle {...args} name='Subscribe & notify' checked={state.tile2} onChange={() => setState({ ...state, tile2: !state.tile2 })} />
            <TileToggle {...args} name='Logging' checked={state.tile3} onChange={() => setState({ ...state, tile3: !state.tile3 })}>
                Text here
            </TileToggle>
        </TileToggleRow>
    )
}

export const TilesToggleRow = TemplateTileRow.bind({})
TilesToggleRow.args = {}
