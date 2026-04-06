import styles from './empty-cart.module.css';
import sprite from '../../../img/icons.svg';
import emptyCart from '../../../img/cart/empty-mobile.png';

const EmptyCart = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.cartIcon}>
        <span className={styles.icon}>
          <svg>
            <use href={`${sprite}#icon-cart`}></use>
          </svg>
        </span>
        <p className={styles.counter}> Cart (0)</p>
      </div>
      <div className={styles.description}>
        <img className={styles.img} src={emptyCart} alt="Empty cart pic" />
        <h4 className={styles.title}>
          Your basket is <span> empty...</span>
        </h4>
        <p className={styles.text}>Go to the main page to select your favorite products and add them to the cart.</p>
      </div>
    </div>
  );
};

export default EmptyCart;
