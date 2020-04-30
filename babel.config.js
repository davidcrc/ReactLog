module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver", {
        "alias": {
          "@components": "./src/components",
          "@context": "./src/context",
          "@navigation": "./src/navigation",
          "@recursos": "./src/recursos",
          "@screens": "./src/screens",
          "@storage": "./src/storage",
          "@styles": "./src/styles",
        }
      }
    ]
  ]
};
