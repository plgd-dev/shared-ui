// @ts-nocheck
import { IntlProvider as ReactIntlProvider } from 'react-intl'
import { createContext, FC } from 'react'
import { useLocalStorage } from '../../../common/hooks'
import { Props } from './IntlProvider.types'

export const LanguageContext = createContext({})

const IntlProvider: FC<Props> = (props) => {
    const { children, defaultLanguage, languages } = props
    const [language, setLanguage] = useLocalStorage('language', defaultLanguage)
    const providerProps = {
        setLanguage,
        language,
    }

    return (
        <LanguageContext.Provider value={providerProps}>
            <ReactIntlProvider
                defaultLocale={defaultLanguage}
                locale={language}
                messages={languages[language]}
                onError={(err: any) => {
                    if (err.code === 'MISSING_TRANSLATION') {
                        // console.warn('Missing translation', err.message)
                        return
                    }
                    throw err
                }}
            >
                {children}
            </ReactIntlProvider>
        </LanguageContext.Provider>
    )
}

IntlProvider.displayName = 'IntlProvider'

export default IntlProvider
