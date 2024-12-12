module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // "react-native-worklets-core/plugin",
      "react-native-reanimated/plugin",
    ], // added this if not working in production use expo reanimated instead
    env: {
      production: {
        plugins: ["transform-remove-console"],
      },
    },
  };
};
