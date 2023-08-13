import { ReactElement, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useIntl } from 'react-intl'
import get from 'lodash/get'
import { useSelector } from 'react-redux'

import NotFoundPage from '../../../components/Templates/NotFoundPage'

import { remoteClientStatuses } from './constants'
import { RemoteClientType } from './RemoteClients.types'

export type useClientAppPageTypes = {
    clientId?: string
    i18n: {
        notFoundRemoteClientMessage: string
        pageNotFound: string
    }
}

export type useClientAppPageReturnType = [clientData: any, error: boolean, errorElement: ReactElement]

export const useClientAppPage = (props: useClientAppPageTypes): useClientAppPageReturnType => {
    const { clientId, i18n } = props
    const { formatMessage: _ } = useIntl()
    const { id: routerId } = useParams()
    const id = clientId || routerId || ''

    const clientData = useSelector((state: any) => state.remoteClients.remoteClients.filter((remoteClient: RemoteClientType) => remoteClient.id === id)?.[0])
    const isTestPage = get(process.env, 'REACT_APP_TEST_REMOTE_CLIENT_DETAIL', false)
    const notFoundPage = useMemo(() => !clientData || (clientData.status === remoteClientStatuses.UNREACHABLE && !isTestPage), [clientData, isTestPage])

    return [clientData, notFoundPage, <NotFoundPage message={i18n.notFoundRemoteClientMessage} title={i18n.pageNotFound} />]
}
