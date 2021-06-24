import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../../css/theme";
import { GlobalStyle } from "../../css/GlobalStyle";

type Theme = "light" | "dark";

interface CustomThemeContextData {
    theme: Theme;
    toggleTheme: () => void;
}

const CustomThemeContext = createContext<CustomThemeContextData>({} as CustomThemeContextData);

const STORAGE_THEME = "fux-theme";

export const CustomThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const value = localStorage.getItem(STORAGE_THEME);

        if ("light" === value || "dark" === value) {
            setTheme(value);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_THEME, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevState => {
            if ("light" === prevState) {
                return "dark";
            } else {
                return "light";
            }
        });
    };

    return (
        <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={"light" === theme ? light : dark}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </CustomThemeContext.Provider>
    );
};

export const useCustomTheme = () => useContext(CustomThemeContext);
