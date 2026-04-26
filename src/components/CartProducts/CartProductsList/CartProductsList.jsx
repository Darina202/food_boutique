import { useDispatch, useSelector } from 'react-redux';
import { selectCartProducts } from '../../../redux/cart/cart-selectors';
import CartProductItem from '../CartProductItem/CartProductItem';
import styles from './cart-product-list.module.css';
import sprite from '../../../img/icons.svg';
import { deleteAllProducts, deleteProductById } from '../../../redux/cart/cart-slice';

const CartProductsList = () => {
  const { cartItems } = useSelector(selectCartProducts);
  const dispatch = useDispatch();

  const toDeleteProduct = id => dispatch(deleteProductById(id));

  const elements = cartItems?.map(item => (
    <CartProductItem key={item._id} product={item} deleteProduct={toDeleteProduct} />
  ));

  return (
    <div className={styles.cartList}>
      <button
        type="button"
        className={styles.deleteAllBtn}
        onClick={() => {
          dispatch(deleteAllProducts());
        }}
      >
        <span className={styles.deleteText}>Delete all</span>
        <svg className={styles.icon}>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      </button>
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
};
export default CartProductsList;
