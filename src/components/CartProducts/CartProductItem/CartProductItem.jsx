import styles from './cart-product-item.module.css';
import sprite from '../../../img/icons.svg';
import { useDispatch } from 'react-redux';
import { changeAmount } from '../../../redux/cart/cart-slice';

const CartProductItem = ({ product, deleteProduct }) => {
  const { _id, name, img, category, size, price, amount = 1 } = product;

  const dispatch = useDispatch();

  const handleUpdateAmount = newAmount => {
    dispatch(changeAmount({ id: _id, amount: newAmount }));
  };

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
        <div className={styles.amount}>
          <p className={styles.price}>${price.toFixed(2)}</p>
          <div className={styles.counter}>
            <button className={styles.btnDecr} onClick={() => amount > 1 && handleUpdateAmount(amount - 1)}>
              -
            </button>
            <span className={styles.number}>{amount}</span>
            <button className={styles.btnIncr} onClick={() => handleUpdateAmount(amount + 1)}>
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default CartProductItem;
