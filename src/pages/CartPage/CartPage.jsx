import CartProductsList from '../../components/CartProducts/CartProductsList/CartProductsList';
import EmptyCart from '../../components/Cart/EmptyCart/EmptyCart';
import { useSelector } from 'react-redux';
import { isCartNotEmpty } from '../../redux/cart/cart-selectors';
import Cart from '../../components/Cart/Cart';

const CartPage = () => {
  const cartLength = useSelector(isCartNotEmpty);
  return (
    <section>
      <Cart />
      {Boolean(cartLength > 0) ? <CartProductsList /> : <EmptyCart />}
    </section>
  );
};
export default CartPage;
