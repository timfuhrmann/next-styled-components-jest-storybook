import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { light } from "./css/theme";

const Providers = ({ children }) => {
    return <ThemeProvider theme={light}>{children}</ThemeProvider>;
};

const customRender = (ui, options = {}) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
