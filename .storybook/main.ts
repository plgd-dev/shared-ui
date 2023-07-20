import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
      },
    },
    'storybook-addon-themes'
  ],
  framework: '@storybook/react-webpack5',
  babel: async (options:any) => {
    options.plugins.push('babel-plugin-inline-react-svg')
    return options;
  },
  // webpackFinal: async config => {
  //   config.resolve.alias = {
  //     ...(config.resolve.alias || [])
  //   };
  //   config.resolve.extensions.push('.ts', '.tsx')
  //   return config
  // },
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true
  }
}

export default config