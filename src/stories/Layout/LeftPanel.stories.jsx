import React, { useState } from 'react'
import LeftPanel from '../../components/Layout/LeftPanel'
import VersionMark from '../../components/Atomic/VersionMark'
import { severities } from '../../components/Atomic/VersionMark/constants'
import { leftPanelMenu } from '../data'
import { useTheme } from '@emotion/react'
import Logo from '../../components/Atomic/Logo'

export default {
    title: 'Layout/LeftPanel',
    component: LeftPanel,
    argTypes: {},
}

const Template = (args) => {
    const [active, setActive] = useState('')
    return (
        <div style={{ width: 300 }}>
            <div id='header-icon-collapse-portal-target' style={{ display: 'none' }}></div>
            <LeftPanel
                {...args}
                activeId={active}
                menu={leftPanelMenu}
                onItemClick={(item, e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log(item)
                    setActive(item.id)
                }}
                versionMark={
                    <VersionMark {...args} severity={severities.SUCCESS} versionText='Version 2.02'>
                        Tag text
                    </VersionMark>
                }
            />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {}

const TemplateActive = (args) => (
    <div style={{ display: 'flex', margin: -10 }}>
        <div style={{ padding: 10, display: 'flex', width: 300 }}>
            <div id='header-icon-collapse-portal-target' style={{ display: 'none' }}></div>
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
        <div style={{ padding: 10, display: 'flex', width: 300 }}>
            <div id='header-icon-collapse-portal-target'></div>
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
    <div style={{ width: 300 }}>
        <div id='header-icon-collapse-portal-target' style={{ display: 'none' }}></div>
        <LeftPanel
            {...args}
            menu={leftPanelMenu}
            newFeature={{
                i18n: {
                    headline: 'New feature',
                    description: 'This is a new feature',
                },
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

const TemplateCollapsed = (args) => {
    const [collapsed, setCollapsed] = useState(false)

    const theme = useTheme()
    return (
        <div style={{ display: 'flex' }}>
            <div id='header-icon-collapse-portal-target'></div>
            <LeftPanel
                collapsed={collapsed}
                logo={theme.logo && <Logo logo={theme.logo} onClick={() => console.log()} />}
                menu={leftPanelMenu}
                setCollapsed={setCollapsed}
                versionMark={
                    <VersionMark {...args} severity={severities.SUCCESS} versionText='Version 2.02'>
                        Tag text
                    </VersionMark>
                }
            />
            <div style={{ flex: '0 0 40px' }}></div>
            <LeftPanel
                {...args}
                activeId='10'
                collapsed={collapsed}
                menu={leftPanelMenu}
                setCollapsed={setCollapsed}
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
}

export const Collapsed = TemplateCollapsed.bind({})
Default.args = {}
