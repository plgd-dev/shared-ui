import React, { useMemo, useState } from 'react'
import Layout from '../../components/Layout'
import LeftPanel from '../../components/Layout/LeftPanel'
import VersionMark from '../../components/Atomic/VersionMark'
import { leftPanelMenu } from '../data'
import { severities } from '../../components/Atomic/VersionMark/constants'
import { useTheme } from '@emotion/react'
import Logo from '../../components/Atomic/Logo'
import Header from '../../components/Layout/Header'

export default {
    title: 'Layout/Layout',
    component: Layout,
    argTypes: {},
}

const TemplateDashboard = (args) => {
    const menu = useMemo(() => leftPanelMenu, [])

    const [collapsed, setCollapsed] = useState(false)

    const theme = useTheme()

    return (
        <Layout
            {...args}
            content={<div>Page layout / custom content</div>}
            header={<Header />}
            leftPanel={
                <LeftPanel
                    collapsed={collapsed}
                    logo={theme.logo && <Logo logo={theme.logo} onClick={() => console.log()} />}
                    menu={menu}
                    setCollapsed={setCollapsed}
                    versionMark={
                        <VersionMark {...args} severity={severities.SUCCESS} versionText='Version 2.02'>
                            Tag text
                        </VersionMark>
                    }
                />
            }
        />
    )
}

export const Default = TemplateDashboard.bind({})
Default.args = {}
Default.parameters = {
    layout: 'fullscreen',
}
