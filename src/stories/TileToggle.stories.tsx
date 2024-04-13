import React, { useState } from 'react'
import TileToggle from '../components/Atomic/TileToggle'
import TileToggleRow from '../components/Atomic/TileToggle/TileToggleRow'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Example/TileToggle',
    component: TileToggle,
    argTypes: {},
}

const Template = (args: any) => {
    const [state, setState] = useState({
        tile1: false,
        tile2: false,
        tile3: false,
    })
    return (
        <div>
            <TileToggle {...args} checked={state.tile1} name='Twin state' onChange={() => setState({ ...state, tile1: !state.tile1 })} />
            <TileToggle {...args} checked={state.tile2} name='Subscribe & notify' onChange={() => setState({ ...state, tile2: !state.tile2 })} />
            <TileToggle {...args} checked={state.tile3} name='Logging' onChange={() => setState({ ...state, tile3: !state.tile3 })} />
        </div>
    )
}

export const Default: StoryFn = Template.bind({})
Default.args = {}

const TemplateTileRow = (args: any) => {
    const [state, setState] = useState({
        tile1: false,
        tile2: false,
        tile3: false,
    })
    return (
        <TileToggleRow>
            <TileToggle {...args} checked={state.tile1} name='Twin state' onChange={() => setState({ ...state, tile1: !state.tile1 })} />
            <TileToggle {...args} checked={state.tile2} name='Subscribe & notify' onChange={() => setState({ ...state, tile2: !state.tile2 })} />
            <TileToggle {...args} checked={state.tile3} name='Logging' onChange={() => setState({ ...state, tile3: !state.tile3 })}>
                Text here
            </TileToggle>
        </TileToggleRow>
    )
}

export const TilesToggleRow: StoryFn = TemplateTileRow.bind({})
TilesToggleRow.args = {}
