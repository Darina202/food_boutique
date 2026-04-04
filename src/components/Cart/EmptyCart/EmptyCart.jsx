import styles from './empty-cart.module.css';
import sprite from '../../../img/icons.svg';
import emptyCart from '../../../img/cart/empty-mobile.png';

const EmptyCart = () => {
  return (
    <div>
      <div className={styles.cartIcon}>
        <span className={styles.icon}>
          <svg>
            <use href={`${sprite}#icon-cart`}></use>
          </svg>
        </span>
        <p className={styles.counter}> Cart (3)</p>
      </div>
      <div className={styles.empty}>
        <img className={styles.img} src={emptyCart} alt="Empty cart pic" />
        <h4>
          Your basket is <span> empty...</span>
        </h4>
        <p>Go to the main page to select your favorite products and add them to the cart.</p>
      </div>
    </div>
  );
};

export default EmptyCart;
