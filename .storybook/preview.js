import { ThemeProvider } from '@emotion/react'
import { addons } from '@storybook/addons'
import { useEffect, useState } from 'react'
import { CHANGE } from 'storybook-addon-themes/src/constants'
import light from '../src/components/Atomic/_theme/light'
import dark from '../src/components/Atomic/_theme/dark'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: ['theme-twt', 'light-mode'], color: '#00aced' },
      { name: 'dark', class: ['theme-fb', 'dark-mode'], color: '#3b5998' },
    ],
  },
}

const channel = addons.getChannel()

const withTheme = (StoryFn, context) => {
  const { themes } = context.parameters

  const [themeName, setThemeName] = useState(() => {
    const lastValue = channel.last(CHANGE);
    return (lastValue && lastValue[0]) || themes.default
  })

  const getThemeByKey = (themeName) => themeName === 'light' ? light : dark

  useEffect(() => {
    channel.on(CHANGE, setThemeName);
    return () => channel.removeListener(CHANGE, setThemeName)
  }, [setThemeName])

  return (
      <ThemeProvider theme={getThemeByKey(themeName)}>
        <StoryFn />
      </ThemeProvider>
  )
}

// export all decorators that should be globally applied in an array
export const decorators = [withTheme]