const path = require("path");

const defaultAlias = {};

module.exports = function getBabelConfig(api) {
  const useESModules = api.env(["legacy", "modern", "stable", "rollup"]);

  const presets = [
    // [
    //   "@babel/preset-env",
    //   {
    //     bugfixes: true,
    //     browserslistEnv: process.env.BABEL_ENV || process.env.NODE_ENV,
    //     debug: process.env.MUI_BUILD_VERBOSE === "true",
    //     modules: useESModules ? false : "commonjs",
    //     shippedProposals: api.env("modern"),
    //   },
    // ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ];

  const plugins = [
    "babel-plugin-optimize-clsx",
    // Need the following 3 proposals for all targets in .browserslistrc.
    // With our usage the transpiled loose mode is equivalent to spec mode.
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-object-rest-spread", { loose: true }],
    [
      "@babel/plugin-transform-runtime",
      {
        useESModules,
        // any package needs to declare 7.4.4 as a runtime dependency. default is ^7.0.0
        version: "^7.4.4",
      },
    ],
  ];

  if (process.env.NODE_ENV === "test") {
    plugins.push([
      "babel-plugin-module-resolver",
      {
        alias: defaultAlias,
        root: ["./"],
      },
    ]);
  }

  return {
    assumptions: {
      noDocumentAll: true,
    },
    presets,
    plugins,
    ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
    overrides: [
      {
        exclude: /\.test\.(js|ts|tsx)$/,
        plugins: ["@babel/plugin-transform-react-constant-elements"],
      },
    ],
    env: {
      coverage: {
        plugins: [
          "babel-plugin-istanbul",
          [
            "babel-plugin-module-resolver",
            {
              root: ["./"],
              alias: defaultAlias,
            },
          ],
        ],
      },
      development: {
        plugins: [["babel-plugin-module-resolver"]],
      },
      legacy: {
        plugins: [
          // IE11 support
          "@babel/plugin-transform-object-assign",
        ],
      },
      test: {
        sourceMaps: "both",
        plugins: [
          [
            "babel-plugin-module-resolver",
            {
              root: ["./"],
              alias: defaultAlias,
            },
          ],
        ],
      },
      benchmark: {
        plugins: [
          [
            "babel-plugin-module-resolver",
            {
              alias: defaultAlias,
            },
          ],
        ],
      },
    },
  };
};
