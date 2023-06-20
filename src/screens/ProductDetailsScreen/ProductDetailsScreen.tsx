import React, {useEffect} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ProductImage} from 'components/ProductImage';
import {AppRoutesRouteProp} from 'navigation/AppContainer';
import {ProductInfoSection} from './components/ProductInfoSection';
import {LayoutContainer} from 'components/LayoutContainer';
import {Palette} from 'styles/colors';
import {useProductDetails} from './hooks/useProductDetails';
import {Spacing} from 'styles/utilities';
import {getProductImageUrl} from 'services/graphql/utilities/utilities';
import {useAddToCart} from './hooks/useAddToCart';
const closeIcon = require('../../assets/icons/xmark.png');

export const ProductDetailsScreen = () => {
  const {productId} =
    useRoute<AppRoutesRouteProp<'ProductDetailsScreen'>>().params;
  const {setOptions, goBack} = useNavigation();
  const {product, loading, error} = useProductDetails(productId);

  const window = useWindowDimensions();
  const {bottom} = useSafeAreaInsets();

  const handleAddToCart = useAddToCart(goBack, product);

  useEffect(() => {
    setOptions({
      headerLeft: () => {
        return null;
      },
    });
  }, [setOptions, product?.title, goBack]);

  return (
    <>
      <LayoutContainer
        inset="none"
        error={error?.message}
        loading={loading || !product}
        scrollable>
        <ProductImage
          uri={getProductImageUrl(product?.images)}
          style={{
            ...styles.image,
            width: window.width,
            height: window.width,
          }}
        />
        <ProductInfoSection product={product} />
      </LayoutContainer>
      <View
        style={{paddingBottom: bottom, backgroundColor: Palette.Background}}>
        <Button title="Add to cart" onPress={handleAddToCart} />
      </View>
      <TouchableOpacity onPress={goBack} style={styles.closeButton}>
        <Image
          source={require('../../assets/icons/xmark.png')}
          style={styles.closeIcon}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    height: 40,
    width: 40,
    top: Spacing.Small,
    right: Spacing.Small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    height: 32,
    width: 32,
    resizeMode: 'contain',
  },
});
