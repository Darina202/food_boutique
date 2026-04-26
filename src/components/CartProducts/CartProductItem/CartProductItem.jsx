import styles from './cart-product-item.module.css';
import sprite from '../../../img/icons.svg';

const CartProductItem = ({ product, deleteProduct }) => {
  const { _id, name, img, category, size, price } = product;
  return (
    <li className={styles.purchase}>
      <button
        type="button"
        className={styles.deleteBtn}
        onClick={() => {
          deleteProduct(_id);
        }}
      >
        <svg className={styles.icon}>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      </button>
      <picture className={styles.picture}>
        <img src={img} alt={name} />
      </picture>
      <div className={styles.description}>
        <h4 className={styles.title}>{name}</h4>
        <ul className={styles.list}>
          <li>
            <p className={styles.characteristic}>
              Category: <span>{category}</span>
            </p>
          </li>
          <li>
            <p className={styles.characteristic}>
              Size: <span>{size}</span>
            </p>
          </li>
        </ul>
        <p className={styles.price}>${price}</p>
      </div>
    </li>
  );
};
export default CartProductItem;
