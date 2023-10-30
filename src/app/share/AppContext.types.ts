import { BuildInformationType } from '../../common/hooks'
import { AnyAction } from 'redux'

export type AppContextType = {
    buildInformation?: BuildInformationType | null
    collapsed?: boolean
    footerExpanded?: boolean
    iframeMode?: boolean
    isHub: boolean
    setCollapsed?: (collapsed: boolean) => void
    setFooterExpanded?: (expand: boolean) => void
    telemetryWebTracer?: any
    updateRemoteClient?: (data: any) => AnyAction
    unauthorizedCallback?: () => void
    useToken?: boolean
}
