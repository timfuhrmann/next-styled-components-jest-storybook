import React from "react";
import { AppProps } from "next/app";
import { CustomThemeProvider } from "../app/context/theme/CustomThemeProvider";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <CustomThemeProvider>
            <Component {...pageProps} />
        </CustomThemeProvider>
    );
};

export default App;
