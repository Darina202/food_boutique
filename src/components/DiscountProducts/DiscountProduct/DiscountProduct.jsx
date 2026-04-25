import styles from './discount-product.module.css';
import sprite from '../../../img/icons.svg';
import CartButton from '../../CartButton/CartButton';

const DiscountProduct = ({ product, onClick, openModal }) => {
  const { _id, name, img, price } = product;

  return (
    <li className={styles.card} onClick={openModal}>
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
          <CartButton id={_id} onClick={onClick} />
        </div>
      </div>
    </li>
  );
};
export default DiscountProduct;
