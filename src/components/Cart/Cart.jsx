import styles from './cart.module.css';
import sprite from '../../img/icons.svg';
import { useSelector } from 'react-redux';
import { isCartNotEmpty } from '../../redux/cart/cart-selectors';

const Cart = () => {
  const cartLength = useSelector(isCartNotEmpty);
  return (
    <>
      <div className={styles.cartIcon}>
        <span className={styles.icon}>
          <svg>
            <use href={`${sprite}#icon-cart`}></use>
          </svg>
        </span>
        <h3 className={styles.counter}> Cart ({cartLength})</h3>
      </div>
    </>
  );
};
export default Cart;
