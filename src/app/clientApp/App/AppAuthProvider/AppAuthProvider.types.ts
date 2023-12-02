import { ReactElement } from 'react'

export type AppAuthProviderRefType = {
    getSignOutMethod(): any
    getUserData(): any
}

export type Props = {
    children: ReactElement
}
