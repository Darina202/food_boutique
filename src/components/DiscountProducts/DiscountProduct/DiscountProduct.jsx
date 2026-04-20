import styles from './discount-product.module.css';
import sprite from '../../../img/icons.svg';

const DiscountProduct = ({ id, name, img, price }) => {
  return (
    <li className={styles.card}>
      <picture className={styles.picture}>
        <img src={img} alt={name} />
        <svg className={styles.discountIcon}>
          <use href={`${sprite}#icon-discount`}></use>
        </svg>
      </picture>
      <div className={styles.description}>
        <h4 className={styles.title}>{name}</h4>
        <div className={styles.price}>
          <p>${price}</p>
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
