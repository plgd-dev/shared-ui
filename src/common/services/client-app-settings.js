let generalConfig = {}
let webOAuthConfig = {}
let wellKnowConfig = null
let signOutRedirect = null
let useToken = true
let clientData = null

// This singleton contains the method getAccessTokenSilently exposed globally, so that we can use this in our interceptors.
export const clientAppSettings = {
    getGeneralConfig: () => generalConfig,
    setGeneralConfig: (config) => (generalConfig = config),
    getWebOAuthConfig: () => webOAuthConfig,
    setWebOAuthConfig: (config) => (webOAuthConfig = config),
    getWellKnownConfig: () => wellKnowConfig,
    setWellKnownConfig: (config) => (wellKnowConfig = config),
    getSignOutRedirect: () => signOutRedirect,
    setSignOutRedirect: (data) => (signOutRedirect = data),
    getUseToken: () => useToken,
    setUseToken: (data) => (useToken = data),
    getClientData: () => clientData,
    setClientData: (data) => (clientData = data),
    reset: () => {
        generalConfig = {}
        webOAuthConfig = {}
        wellKnowConfig = null
        signOutRedirect = null
        useToken = true
        clientData = true
    },
}
