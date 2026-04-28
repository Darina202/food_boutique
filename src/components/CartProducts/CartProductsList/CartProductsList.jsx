import { useDispatch, useSelector } from 'react-redux';
import { selectCartProducts } from '../../../redux/cart/cart-selectors';
import CartProductItem from '../CartProductItem/CartProductItem';
import styles from './cart-product-list.module.css';
import sprite from '../../../img/icons.svg';
import { deleteAllProducts, deleteProductById } from '../../../redux/cart/cart-slice';
import CartOrderForm from 'components/CartOrderForm/CartOrderForm';

const CartProductsList = () => {
  const { cartItems } = useSelector(selectCartProducts);
  const dispatch = useDispatch();

  const toDeleteProduct = id => dispatch(deleteProductById(id));
  const toDeleteAllProduct = () => dispatch(deleteAllProducts());

  const elements = cartItems?.map(item => (
    <CartProductItem key={item._id} product={item} deleteProduct={toDeleteProduct} />
  ));

  const totalPrice = cartItems?.reduce((previousValue, item) => {
    return previousValue + item.price * item.amount;
  }, 0);

  const orderedItems = cartItems =>
    cartItems?.reduce((allItems, item) => {
      allItems.push({ productId: item._id, amount: item.amount });

      return allItems;
    }, []);

  return (
    <div className={styles.order}>
      <div className={styles.cartList}>
        <button
          type="button"
          className={styles.deleteAllBtn}
          onClick={() => {
            toDeleteAllProduct();
          }}
        >
          <span className={styles.deleteText}>Delete all</span>
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </button>
        <ul className={styles.list}>{elements}</ul>
      </div>
      <CartOrderForm
        totalPrice={totalPrice}
        orderedItems={orderedItems(cartItems)}
        toDeleteAllProduct={toDeleteAllProduct}
      />
    </div>
  );
};
export default CartProductsList;
