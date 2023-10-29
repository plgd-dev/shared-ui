import { ReactElement, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { useSelector } from 'react-redux'

import NotFoundPage from '../../../components/Templates/NotFoundPage'

import { RemoteClientType } from './RemoteClients.types'

export type useClientAppPageTypes = {
    clientId?: string
    i18n: {
        notFoundRemoteClientMessage: string
        pageNotFound: string
    }
}

export type useClientAppPageReturnType = [clientData: RemoteClientType, error: boolean, errorElement: ReactElement]

export const useClientAppPage = (props: useClientAppPageTypes): useClientAppPageReturnType => {
    const { clientId, i18n } = props
    const { formatMessage: _ } = useIntl()
    const { id: routerId } = useParams()
    const id = clientId || routerId || ''

    const clientData = useSelector((state: any) => state.remoteClients.remoteClients.filter((remoteClient: RemoteClientType) => remoteClient.id === id)?.[0])
    const notFoundPage = useMemo(() => !clientData, [clientData])

    return [clientData, notFoundPage, <NotFoundPage message={i18n.notFoundRemoteClientMessage} title={i18n.pageNotFound} />]
}
