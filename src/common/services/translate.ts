let formatMessage: any = null

export const translate = {
    setTranslator: (t: any) => (formatMessage = t),
    translate: (key: { defaultMessage: string; id: string }, params?: any) => {
        if (formatMessage) {
            return formatMessage(key, params)
        }
        return key
    },
}
