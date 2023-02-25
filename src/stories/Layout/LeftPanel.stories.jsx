import React from 'react'
import LeftPanel from '../../components/new/Layout/LeftPanel'
import VersionMark from '../../components/new/VersionMark'
import { severities } from '../../components/new/VersionMark/constants'
import { leftPanelMenu } from '../data'

export default {
    title: 'Layout/LeftPanel',
    component: LeftPanel,
    argTypes: {},
}

const Template = (args) => (
    <div>
        <LeftPanel
            {...args}
            menu={leftPanelMenu}
            versionMark={
                <VersionMark {...args} severity={severities.SUCCESS} versionText='Version 2.02'>
                    Tag text
                </VersionMark>
            }
        />
    </div>
)

export const Default = Template.bind({})
Default.args = {}

const TemplateActive = (args) => (
    <div style={{ display: 'flex', margin: -10 }}>
        <div style={{ padding: 10 }}>
            <LeftPanel
                {...args}
                activeId='1'
                menu={leftPanelMenu}
                versionMark={
                    <VersionMark {...args} severity={severities.SUCCESS} versionText='Version 2.02'>
                        Tag text
                    </VersionMark>
                }
            />
        </div>
        <div style={{ padding: 10 }}>
            <LeftPanel
                {...args}
                activeId='10'
                menu={leftPanelMenu}
                versionMark={
                    <VersionMark
                        {...args}
                        severity={severities.ERROR}
                        update={{
                            text: 'Click here!',
                            onClick: () => alert('update click'),
                        }}
                        versionText='Version 2.02 • New update is available.'
                    >
                        Tag text
                    </VersionMark>
                }
            />
        </div>
    </div>
)

export const ActiveItem = TemplateActive.bind({})
Default.args = {}

const TemplateFeature = (args) => (
    <div>
        <LeftPanel
            {...args}
            menu={leftPanelMenu}
            newFeature={{
                onClick: () => console.log('click'),
                onClose: () => console.log('close'),
            }}
            versionMark={
                <VersionMark
                    {...args}
                    severity={severities.ERROR}
                    update={{
                        text: 'Click here!',
                        onClick: () => alert('update click'),
                    }}
                    versionText='Version 2.02 • New update is available.'
                >
                    Tag text
                </VersionMark>
            }
        />
    </div>
)

export const NewFeature = TemplateFeature.bind({})
Default.args = {}

const TemplateCollapsed = (args) => (
    <div style={{ display: 'flex', margin: '-10px -120px' }}>
        <div style={{ padding: '10px 120px' }}>
            <LeftPanel
                {...args}
                collapsed={true}
                menu={leftPanelMenu}
                versionMark={
                    <VersionMark {...args} severity={severities.SUCCESS} versionText='Version 2.02'>
                        Tag text
                    </VersionMark>
                }
            />
        </div>
        <div style={{ padding: '10px 120px' }}>
            <LeftPanel
                {...args}
                activeId='1'
                collapsed={true}
                menu={leftPanelMenu}
                versionMark={
                    <VersionMark {...args} severity={severities.SUCCESS} versionText='Version 2.02'>
                        Tag text
                    </VersionMark>
                }
            />
        </div>
        <div style={{ padding: '10px 120px' }}>
            <LeftPanel
                {...args}
                activeId='10'
                collapsed={true}
                menu={leftPanelMenu}
                versionMark={
                    <VersionMark
                        {...args}
                        severity={severities.ERROR}
                        update={{
                            text: 'Click here!',
                            onClick: () => alert('update click'),
                        }}
                        versionText='Version 2.02 • New update is available.'
                    >
                        Tag text
                    </VersionMark>
                }
            />
        </div>
    </div>
)

export const Collapsed = TemplateCollapsed.bind({})
Default.args = {}
