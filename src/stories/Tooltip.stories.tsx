import React from 'react'
import Tooltip, { FloatingDelayGroup } from '../components/Atomic/Tooltip'
import { convertSize, IconTrash } from '../components/Atomic/Icon'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Example/Tooltip',
    component: Tooltip,
    argTypes: {},
}

const Template = (args: any) => (
    <div>
        <Tooltip {...args} content='Tooltip label 1' delay={200}>
            <IconTrash {...convertSize(24)} />
        </Tooltip>

        <br />
        <br />
        <hr />
        <br />
        <br />

        <FloatingDelayGroup delay={200}>
            <div
                style={{
                    display: 'flex',
                }}
            >
                <Tooltip content='Tooltip label 1' id='tooltip-group-1'>
                    <IconTrash {...convertSize(24)} />
                </Tooltip>
                <Tooltip content='Tooltip label 2' id='tooltip-group-2'>
                    <IconTrash {...convertSize(24)} />
                </Tooltip>
                <Tooltip content='Tooltip label 3' id='tooltip-group-3'>
                    <IconTrash {...convertSize(24)} />
                </Tooltip>
            </div>
        </FloatingDelayGroup>
    </div>
)

export const Default: StoryFn = Template.bind({})
Default.args = {}
