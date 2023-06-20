module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          components: './src/components',
          assets: './src/assets',
          screens: './src/screens',
          services: './src/services',
          state: './src/state',
          styles: './src/styles',
          utilities: './src/utilities',
          navigation: './src/navigation',
        },
      },
    ],
  ],
};
