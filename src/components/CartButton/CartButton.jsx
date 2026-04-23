import { useSelector } from 'react-redux';
import styles from './cart-button.module.css';
import sprite from '../../img/icons.svg';
import { selectCartProducts } from '../../redux/cart/cart-selectors';

const CartButton = ({ id, onClick, colorClass }) => {
  const { cartItems } = useSelector(selectCartProducts);
  const isItemInCart = cartItems.some(cartItem => cartItem._id === id);

  return (
    <button className={`${styles.icon} ${styles[colorClass]}`} onClick={onClick}>
      {isItemInCart ? (
        <svg className={styles.iconCheck}>
          <use href={`${sprite}#icon-check`}></use>
        </svg>
      ) : (
        <svg className={styles.iconCart}>
          <use href={`${sprite}#icon-cart`}></use>
        </svg>
      )}
    </button>
  );
};

export default CartButton;
