module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-themes'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  babel: async options => {
    options.plugins.push('babel-plugin-inline-react-svg')
    return options;
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...(config.resolve.alias || [])
    };
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true
  }
};