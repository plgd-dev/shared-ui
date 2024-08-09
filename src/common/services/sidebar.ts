const checkVisibility = (visibility: boolean, service?: string) => {
    if (!visibility) return false
    return service ? true : 'disabled'
}

export const updateSidebarVisibility = (wellKnown: any) => ({
    ...wellKnown.ui,
    visibility: {
        ...wellKnown.visibility,
        mainSidebar: {
            ...wellKnown.ui.visibility.mainSidebar,
            apiTokens: checkVisibility(wellKnown.ui.visibility.mainSidebar.apiTokens, wellKnown.apiTokens),
        },
    },
})
