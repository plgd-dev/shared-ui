module.exports = function({ config }: any) {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve("babel-loader"),
        options: {
            presets: [["react-app", { flow: false, typescript: true }], require.resolve("@emotion/babel-preset-css-prop")],
        },
    })

    config.resolve.extensions.push(".ts", ".tsx");

    config.resolve.fallback = {
        vm : require.resolve("vm-browserify"),
    }

    return config;
};