import CartProductsList from '../../components/CartProducts/CartProductsList/CartProductsList';
import EmptyCart from '../../components/Cart/EmptyCart/EmptyCart';
import styles from './cart-page.module.css';
import { useSelector } from 'react-redux';
import { isCartNotEmpty } from '../../redux/cart/cart-selectors';
import Cart from '../../components/Cart/Cart';
import CartOrderForm from '../../components/CartOrderForm/CartOrderForm';

const CartPage = () => {
  const cartLength = useSelector(isCartNotEmpty);
  return (
    <section>
      <Cart />
      <div className={styles.order}>
        {Boolean(cartLength > 0) ? <CartProductsList /> : <EmptyCart />}
        <CartOrderForm />
      </div>
    </section>
  );
};
export default CartPage;
