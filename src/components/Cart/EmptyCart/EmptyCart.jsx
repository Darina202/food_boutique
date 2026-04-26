import styles from './empty-cart.module.css';
import emptyCartMobile from '../../../img/cart/empty-mobile.png';
import emptyCartMobile2x from '../../../img/cart/empty-mobile@2x.png';
import emptyCartTab from '../../../img/cart/empty-tab.png';
import emptyCartTab2x from '../../../img/cart/empty-tab@2x.png';

const EmptyCart = () => {
  return (
    <div className={styles.description}>
      <picture>
        <source media="(min-width: 768px)" srcSet={`${emptyCartTab} 1x, ${emptyCartTab2x} 2x`} />
        <img
          src={emptyCartMobile}
          srcSet={`${emptyCartMobile} 1x, ${emptyCartMobile2x} 2x`}
          alt="Empty cart pic"
          className={styles.img}
        />
      </picture>
      <h4 className={styles.title}>
        Your basket is <span> empty...</span>
      </h4>
      <p className={styles.text}>Go to the main page to select your favorite products and add them to the cart.</p>
    </div>
  );
};

export default EmptyCart;
