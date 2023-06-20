import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Spacing} from 'styles/utilities';

interface Props {
  message: string;
}

export const ErrorStatePlaceholder = ({message}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/icons/xmark.png')}
      />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.Medium,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: Spacing.Medium,
  },
  text: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});
