export const theme = {
    //region Color
    black: "#000",
    white: "#fff",
    //endregion

    //region Breakpoints
    bp: {
        m: "screen and (min-width: 768px)",
        l: "screen and (min-width: 1024px)",
        xl: "screen and (min-width: 1340px)",
        xxl: "screen and (min-width: 2000px)",
    },
    //endregion
};

export const light = {
    ...theme,
    name: "default/light",

    //region Colors
    gray50: "#fff",
    gray100: "#f5f5f5",
    gray200: "#eaeaea",
    gray900: "#2c2c2c",
    //endregion
};

export const dark = {
    ...theme,
    name: "dark",

    //region Colors
    gray50: "#080808",
    gray100: "#1e1e1e",
    gray200: "#95989A",
    gray900: "#efefef",
    //endregion
};

type Theme = typeof light & typeof dark;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
