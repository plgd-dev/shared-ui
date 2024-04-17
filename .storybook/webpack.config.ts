module.exports = function({ config }: any) {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve("babel-loader"),
        options: {
            presets: [["react-app", { flow: false, typescript: true }], require.resolve("@emotion/babel-preset-css-prop"), "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
        },
    })

    config.entry = ["regenerator-runtime/runtime.js", ...config.entry]

    config.resolve.extensions.push(".ts", ".tsx");

    config.resolve.fallback = {
        vm : require.resolve("vm-browserify"),
    }

    return config;
};