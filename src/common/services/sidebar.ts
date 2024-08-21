const checkVisibility = (visibility: boolean, service?: any) => {
    if (!visibility) return false
    return service ? true : 'disabled'
}

export const updateSidebarVisibility = (wellKnown: any) => ({
    ...wellKnown.ui,
    visibility: {
        ...wellKnown.visibility,
        mainSidebar: {
            ...wellKnown.ui.visibility.mainSidebar,
            apiTokens: checkVisibility(wellKnown.ui.visibility.mainSidebar.apiTokens, wellKnown.m2mOauthClient),
            deviceProvisioning: checkVisibility(wellKnown.ui.visibility.mainSidebar.deviceProvisioning, wellKnown.ui.deviceProvisioningService),
            snippetService: checkVisibility(wellKnown.ui.visibility.mainSidebar.snippetService, wellKnown.ui.snippetService),
        },
    },
})
