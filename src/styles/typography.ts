import {StyleSheet} from 'react-native';

const fontSizes = {
  small: 14,
  callout: 16,
  body: 18,
  title3: 22,
  title2: 26,
  title: 32,
};

export const typography = StyleSheet.create({
  button: {
    fontSize: fontSizes.callout,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  small: {
    fontSize: fontSizes.small,
    fontWeight: 'bold',
  },
  callout: {
    fontSize: fontSizes.callout,
  },
  body: {
    fontSize: fontSizes.body,
  },
  title3: {
    fontSize: fontSizes.title3,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: fontSizes.title2,
    fontWeight: 'bold',
  },
  title: {
    fontSize: fontSizes.title,
    fontWeight: 'bold',
  },
});
