let getAccessTokenSilently = null
let generalConfig = {}
let deviceOAuthConfig = {}
let webOAuthConfig = {}
let getAccessToken = null
let userManager = null
let wellKnowConfig = null
let userData = null
let signOutRedirect = null

// This singleton contains the method getAccessTokenSilently exposed globally, so that we can use this in our interceptors.
export const clientAppSetings = {
    getAccessTokenSilently: () => getAccessTokenSilently,
    setAccessTokenSilently: (func) => (getAccessTokenSilently = func),
    getAccessToken: () => getAccessToken,
    setAccessToken: (func) => (getAccessToken = func),
    getGeneralConfig: () => generalConfig,
    setGeneralConfig: (config) => (generalConfig = config),
    getWebOAuthConfig: () => webOAuthConfig,
    setWebOAuthConfig: (config) => (webOAuthConfig = config),
    getDeviceOAuthConfig: () => deviceOAuthConfig,
    setDeviceOAuthConfig: (config) => (deviceOAuthConfig = config),
    getUserManager: () => userManager,
    setUserManager: (data) => (userManager = data),
    getWellKnowConfig: () => wellKnowConfig,
    setWellKnowConfig: (config) => (wellKnowConfig = config),
    getUserData: () => userData,
    setUserData: (data) => (userData = data),
    getSignOutRedirect: () => signOutRedirect,
    setSignOutRedirect: (data) => (signOutRedirect = signOutRedirect),
}
