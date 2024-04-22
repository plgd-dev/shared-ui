import {render} from '@testing-library/react';
import {ThemeProvider} from "@emotion/react";
import plgd from "../src/components/Atomic/_theme/plgd";

const ProviderWrapper = ({ children } : { children: any}) => (
    <ThemeProvider theme={plgd}>
        {children}
    </ThemeProvider>
);


const customRender: any = (ui: any, options: any) => render(ui, { wrapper: ProviderWrapper, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }