import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'
import get from 'lodash/get'

export type UseAppThemeType = {
    getTheme: (url: string) => any
    setTheme: (theme: string) => AnyAction
    setThemes: (themes: string[]) => AnyAction
}

export function useAppTheme(options: UseAppThemeType) {
    const { getTheme, setTheme, setThemes } = options
    const [appTheme, setAppTheme] = useState<null | object[]>(null)
    const [themeError, setThemeError] = useState<any>(null)
    const appStore = useSelector((state: any) => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!appTheme) {
            const getThemeData = async () => {
                try {
                    const { data: themeData } = await getTheme(window.location.origin)

                    if (themeData) {
                        let themeNames: string[] = []
                        let themes: any = {}

                        themeData.themes.forEach((t: any) => {
                            themeNames = themeNames.concat(Object.keys(t))
                            themes[Object.keys(t)[0]] = t
                        })

                        if (appStore.configuration?.theme === '') {
                            dispatch(setTheme(themeData.defaultTheme))
                        }

                        dispatch(setThemes(themeNames))
                        setAppTheme(themeData.themes)
                    }
                } catch (e) {
                    console.log(e)
                    setThemeError(new Error('Could not retrieve the theme file.'))
                }
            }

            getThemeData().then()
        }
    }, [appStore.configuration?.theme, dispatch, appTheme, getTheme, setThemes, setTheme])

    const getThemeData = useCallback(
        (currentTheme: string) => {
            if (appTheme) {
                const index = appTheme.findIndex((i: any) => Object.keys(i)[0] === currentTheme)
                if (index >= 0) {
                    return get(appTheme[index], `${currentTheme}`, {})
                }
            }

            return {}
        },
        [appTheme]
    )

    return [appTheme, themeError, getThemeData]
}
