import styles from './discount-product.module.css';
import sprite from '../../../img/icons.svg';

const DiscountProduct = () => {
  return (
    <li className={styles.card}>
      <picture className={styles.picture}>
        <img src="https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png" alt="" />
        <svg className={styles.discountIcon}>
          <use href={`${sprite}#icon-discount`}></use>
        </svg>
      </picture>
      <div className={styles.description}>
        <h4 className={styles.title}>Apricot</h4>
        <div className={styles.price}>
          <p>$6.99</p>
          <button className={styles.icon}>
            <svg>
              <use href={`${sprite}#icon-cart`}></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};
export default DiscountProduct;
