import { BuildInformationType } from '../../common/hooks'
import { AnyAction } from 'redux'

export type AppContextType = {
    buildInformation?: BuildInformationType | null
    collapsed?: boolean
    footerExpanded?: boolean
    iframeMode?: boolean
    isHub: boolean
    reFetchConfig?: any
    setCollapsed?: (collapsed: boolean) => void
    setFooterExpanded?: (expand: boolean) => void
    setInitialize?: (initialize: boolean) => void
    telemetryWebTracer?: any
    updateRemoteClient?: (data: any) => AnyAction
    updateAppWellKnownConfig?: (data: any) => AnyAction
    unauthorizedCallback?: () => void
    useToken?: boolean
}
