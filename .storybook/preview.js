import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../app/css/theme";
import { GlobalStyle } from "../app/css/GlobalStyle";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

const withGlobalStyles = storyFn => {
    return (
        <>
            <GlobalStyle />
            {storyFn()}
        </>
    );
};

const themes = [light, dark];

addDecorator(withGlobalStyles);
addDecorator(withThemesProvider(themes, ThemeProvider));
