import { useDispatch, useSelector } from 'react-redux';
import { selectCartProducts } from '../redux/cart/cart-selectors';
import { addToCart } from '../redux/cart/cart-slice';

const useCartBtn = () => {
  const { cartItems } = useSelector(selectCartProducts);
  const dispatch = useDispatch();

  const handleClick = item => {
    const isItemInCart = cartItems.some(cartItem => cartItem._id === item._id);
    if (!isItemInCart) {
      dispatch(addToCart(item));
    }
  };
  return { cartItems, handleClick };
};

export default useCartBtn;
