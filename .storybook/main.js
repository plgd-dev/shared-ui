module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  core: {
    builder: 'webpack5'
  },
  babel: async (options) => {
    options.plugins.push('babel-plugin-inline-react-svg');
    return options;
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || []),
    };
    config.resolve.extensions.push(".ts", ".tsx");
    // As the SVG loader may conflict with the file loader
    // We add .svg as a excluded extension for the file loader
    const filesRule = config.module.rules.find((r) => r.test.test(".svg"));
    filesRule.exclude = /\.svg$/;

    // We push the new loader, as usual
    config.module.rules.push(
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        }
    );
    return config;
  },
  staticDirs: ['../public']
}