import { useAuth, User } from 'oidc-react'
import { forwardRef, useImperativeHandle, useRef } from 'react'

import { security } from '../../../../common/services'

import AppLoader from '../AppLoader'
import { AppAuthProviderRefType, Props } from './AppAuthProvider.types'

const AppAuthProvider = forwardRef<AppAuthProviderRefType, Props>((props, ref) => {
    const { children } = props
    const { isLoading, userData, signOutRedirect } = useAuth()
    const userDataRef = useRef<User | null>(null)

    if (userData) {
        security.setAccessToken(userData.access_token)
        userDataRef.current = userData
    }

    useImperativeHandle(ref, () => ({
        getSignOutMethod: () =>
            signOutRedirect({
                post_logout_redirect_uri: window.location.origin,
            }),
        getUserData: () => userDataRef.current,
    }))

    if (isLoading) {
        return (
            <AppLoader
                i18n={{
                    loading: 'Loading',
                }}
            />
        )
    }

    return children
})

AppAuthProvider.displayName = 'AppAuthProvider'

export default AppAuthProvider
