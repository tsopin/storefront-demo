import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {ProductNode} from 'services/graphql/types';
import {getProductImageUrl} from 'services/graphql/utilities/utilities';
import {addToCart} from 'state/slices';

type GoBack = () => void;

export const useAddToCart = (goBack: GoBack, product?: ProductNode) => {
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(() => {
    if (!product || !product.variants?.nodes[0]) {
      return;
    }

    const {title, variants, images, id} = product;
    const {id: variantId, price} = variants.nodes[0];

    dispatch(
      addToCart({
        title,
        variantId,
        productId: id,
        quantity: 1,
        price,
        imageUrl: getProductImageUrl(images),
      }),
    );
    goBack();
  }, [dispatch, goBack, product]);

  return handleAddToCart;
};
