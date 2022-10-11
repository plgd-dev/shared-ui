const path = require('path')

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
  babel: async (options) => {
    options.plugins.push('babel-plugin-inline-react-svg');
    return options;
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "swiper/css/autoplay": path.resolve(__dirname, "../../../node_modules/swiper/modules/autoplay/autoplay.min.css"),
      "swiper/css/pagination": path.resolve(__dirname, "../../../node_modules/swiper/modules/pagination/pagination.min.css"),
      "swiper/css": path.resolve(__dirname, "../../../node_modules/swiper/swiper-bundle.css"),
    };
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  staticDirs: ['../public']
}