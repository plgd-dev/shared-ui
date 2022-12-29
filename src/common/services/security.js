let getAccessTokenSilently = null
let generalConfig = {}
let deviceOAuthConfig = {}
let webOAuthConfig = {}
let getAccessToken = null
let userManager = null
let wellKnowConfig = null

// This singleton contains the method getAccessTokenSilently exposed globally, so that we can use this in our interceptors.
export const security = {
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
    setWellKnowConfig: (config) => (wellKnowConfig = config)
}
