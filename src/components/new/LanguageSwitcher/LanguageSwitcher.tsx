import { useContext, useRef, useState, memo } from 'react'
import { useIntl } from 'react-intl'
import classNames from 'classnames'

import { useClickOutside } from '../../../common/hooks'
import { LanguageContext } from '../IntlProvider'
import appConfig from '@/config'
import { messages as t } from './LanguageSwitcher.i18n'
import './LanguageSwitcher.scss'

// @ts-ignore
const LanguageSwitcher = memo(() => {
    const { formatMessage: _ } = useIntl()
    const [expanded, setExpand] = useState(false)
    const clickRef = useRef<HTMLDivElement>(null)
    useClickOutside(clickRef, () => setExpand(false))
    // @ts-ignore
    const { language, setLanguage } = useContext(LanguageContext)

    const changeLanguage = (lang: string) => {
        setLanguage(lang)
        setExpand(false)
    }

    return (
        <div id='language-switcher' className='status-bar-item' ref={clickRef}>
            <div className='toggle' onClick={() => setExpand(!expanded)}>
                {language}
                <i
                    className={classNames('fas', {
                        'fa-chevron-down': !expanded,
                        'fa-chevron-up': expanded,
                    })}
                />
            </div>
            {expanded && (
                <div className='content'>
                    {appConfig?.supportedLanguages?.map?.((language: string) => {
                        // @ts-ignore
                        const lang = _(t[language])
                        return (
                            <span key={language} onClick={() => changeLanguage(language)}>
                                {lang || language}
                            </span>
                        )
                    })}
                </div>
            )}
        </div>
    )
})

LanguageSwitcher.displayName = 'LanguageSwitcher'

export default LanguageSwitcher
