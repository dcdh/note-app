import {StrictMode} from "react";
import {createTheme, MantineProvider, MantineThemeOverride} from '@mantine/core';
import {createRoot, Root} from "react-dom/client";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/notifications/styles.css';

import App from "./App";

const root: Root = createRoot(
    document.getElementById('root') as HTMLElement
);
const theme: MantineThemeOverride = createTheme({
    /** Your theme override here */
});
root.render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <App/>
        </MantineProvider>
    </StrictMode>
);