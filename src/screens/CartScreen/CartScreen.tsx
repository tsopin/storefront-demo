import React, {useCallback} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'state/store';
import {AddProductParams, changeQuantity, removeFromCart} from 'state/slices';
import {CartItem, SummarySection} from './components';
import {LayoutContainer} from 'components/LayoutContainer';
import {EmptyStatePlaceholder} from 'components/EmptyStatePlaceholder';
import {typography} from 'styles/typography';
import {Spacing} from 'styles/utilities';
import {EmptyStateType} from 'components/EmptyStatePlaceholder/EmptyStatePlaceholder';
import {AppStackNavigationProp} from 'navigation/AppContainer';
import {useNavigation} from '@react-navigation/native';

export const CartScreen = () => {
  const {navigate} = useNavigation<AppStackNavigationProp>();

  const {cart} = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const showAlert = useCallback(
    (title: string, variantId: string) => {
      Alert.alert(
        `Remove ${title} from cart?`,
        '',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Remove',
            style: 'destructive',
            onPress: () => {
              dispatch(removeFromCart(variantId));
            },
          },
        ],
        {cancelable: false},
      );
    },
    [dispatch],
  );

  const handleValueChange = useCallback(
    (title: string, variantId: string, quantity: number) => {
      if (quantity > 0) {
        dispatch(changeQuantity({variantId, quantity}));
      } else {
        showAlert(title, variantId);
      }
    },
    [dispatch, showAlert],
  );

  const handleStartShopping = useCallback(() => {
    navigate('Tabs', {
      screen: 'Collections',
      params: {
        screen: 'CollectionListScreen',
      },
    });
  }, [navigate]);

  const renderItem = (item: AddProductParams) => (
    <CartItem
      key={item.variantId}
      item={item}
      onQuantityChange={quantity =>
        handleValueChange(item.title ?? 'Product', item.variantId, quantity)
      }
    />
  );

  if (!cart?.items || cart.items.length === 0) {
    return (
      <EmptyStatePlaceholder
        onPress={handleStartShopping}
        type={EmptyStateType.CART}
      />
    );
  }

  return (
    <LayoutContainer scrollable inset="small" safeAreaInsets="TOP">
      <Text style={styles.title}>Your cart</Text>
      <View style={{marginBottom: Spacing.Large}}>
        <Text style={styles.sectionTitle}>Cart Items</Text>
        {cart?.items?.map(item => renderItem(item))}
      </View>

      {cart.items && cart.items.length > 0 && (
        <SummarySection total={cart.total} />
      )}
    </LayoutContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    ...typography.title,
    marginBottom: Spacing.Large,
  },
  sectionTitle: {
    ...typography.title3,
    marginBottom: Spacing.Large,
  },
});
