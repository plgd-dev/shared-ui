// @ts-nocheck
import { IntlProvider as ReactIntlProvider } from 'react-intl'
import { createContext, FC } from 'react'
import languages from '@/languages/languages.json'
import { useLocalStorage } from '../../../common/hooks'
import appConfig from '@/config'
import { Props } from './IntlProvider.types'

export const LanguageContext = createContext({})

const IntlProvider: FC<Props> = (props) => {
    const { children } = props
    const [language, setLanguage] = useLocalStorage('language', appConfig.defaultLanguage)
    const providerProps = {
        setLanguage,
        language,
    }

    return (
        <LanguageContext.Provider value={providerProps}>
            <ReactIntlProvider
                messages={languages[language]}
                locale={language}
                defaultLocale={appConfig.defaultLanguage}
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
