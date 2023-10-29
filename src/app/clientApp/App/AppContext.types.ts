import { BuildInformationType } from '../../../common/hooks'
import { AnyAction } from 'redux'

export type AppContextType = {
    buildInformation?: BuildInformationType | null
    collapsed?: boolean
    iframeMode?: boolean
    isHub: boolean
    setCollapsed?: (collapsed: boolean) => void
    updateRemoteClient?: (data: any) => AnyAction
    unauthorizedCallback?: () => void
    useToken?: boolean
}
