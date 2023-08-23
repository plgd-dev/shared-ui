import { dirname, join } from "path";
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    getAbsolutePath("@storybook/preset-scss"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
      },
    },
    getAbsolutePath("storybook-addon-themes")
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),

    options: {
      builder: {
        fsCache: true,
        lazyCompilation: true
      }
    }
  },
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
  core: {},
  staticDirs: ['../public'],
  docs: {
    autodocs: true
  }
}

export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}