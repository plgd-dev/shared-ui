import React from 'react'
import type { Preview } from '@storybook/react'
import {ThemeProvider} from "@emotion/react";
import { withThemeByClassName } from '@storybook/addon-themes'

import plgd from '../src/components/Atomic/_theme/plgd'
import siemens from "../src/components/Atomic/_theme/siemens";
import App from "../src/components/Atomic/App/App";
import ErrorBoundary from "../src/components/Atomic/ErrorBoundary";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview

const withTheme = (StoryFn: any, context: any) => {
    const getThemeByKey = (themeName: string) => themeName === 'siemens' ? siemens : plgd

    return (
        <ThemeProvider theme={getThemeByKey(context.globals.theme)}>
            <ErrorBoundary>
                <App>
                    <StoryFn/>
                </App>
            </ErrorBoundary>
            <div id="modal-root"></div>
            <div id="modal-floating"></div>
        </ThemeProvider>
    )
}

export const decorators = [withTheme, withThemeByClassName({
    themes: {
        plgd: 'plgd-theme',
        siemens: 'siemens-theme',
    },
    defaultTheme: 'plgd',
})]