import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {CollectionNode} from 'services/graphql/types';
import {CornerRadius, Spacing} from 'styles/utilities';
import {typography} from 'styles/typography';
import {Palette} from 'styles/colors';

interface CollectionCellProps {
  item: CollectionNode;
  onPress: () => void;
}

export const CollectionCell = ({item, onPress}: CollectionCellProps) => {
  const {title, image} = item;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.collectionItem}
      onPress={onPress}>
      {image && <Image source={{uri: image.url}} style={styles.image} />}
      <Text style={styles.title} key={title}>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  collectionItem: {
    flex: 1,
    marginBottom: Spacing.Small,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    ...typography.title,
    color: 'white',
    fontWeight: '900',
    textShadowColor: Palette.TextPrimary,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: CornerRadius.small,
    resizeMode: 'cover',
  },
});
