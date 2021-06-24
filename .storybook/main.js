module.exports = {
    stories: ["../app/layout/**/*.stories.mdx", "../app/layout/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-addon-styled-component-theme/dist/preset",
    ],
};
