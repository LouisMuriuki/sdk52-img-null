// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  env: {
    node: true,
  },
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "error",
  },
  ignorePatterns: [
    "build/",
    "ios/build/",
    "android/build/",
    "ios/Pods/",
    "android/app/build/",
  ],
};
