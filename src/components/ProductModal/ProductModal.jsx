import { useEffect, useState } from 'react';
import styles from './product-modal.module.css';
import { getProductById } from '../../api/products-api';
import CustomModal from 'components/Modal/Modal';
import CartButton from 'components/CartButton/CartButton';
import CharacteristicList from 'components/CharacteristicList/CharacteristicList';
import useCartBtn from 'helpers/useCartBtn';
import { useDispatch } from 'react-redux';
import { deleteProductById } from '../../redux/cart/cart-slice';

const ProductModal = ({ selectedProductId, modalIsOpen, setModalIsOpen }) => {
  const [item, setItem] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { _id, name, img, category, size, popularity, price, desc } = item;
  const { handleClick, cartItems } = useCartBtn();
  const dispatch = useDispatch();

  const addClick = item => {
    const isItemInCart = cartItems.some(cartItem => cartItem._id === item._id);
    if (!isItemInCart) {
      handleClick(item);
    } else {
      dispatch(deleteProductById(item._id));
    }
  };

  useEffect(() => {
    if (!modalIsOpen || !selectedProductId) return;

    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const data = await getProductById(selectedProductId);
        setItem(data ? data : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetail(selectedProductId);
  }, [selectedProductId, modalIsOpen]);

  return (
    <CustomModal isOpen={modalIsOpen} customStyles="productCard" closeModal={setModalIsOpen}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {item && (
        <div className={styles.modal}>
          <div className={styles.top}>
            <picture className={styles.picture}>
              <img src={img} alt={name} />
            </picture>
            <div>
              <div className={styles.caracteristic}>
                <h4 className={styles.title}>{name}</h4>
                <CharacteristicList category={category} size={size} popularity={popularity} />
              </div>
              <p className={styles.description}>{desc}</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <p className={styles.price}>${price}</p>
            <CartButton id={_id} colorClass="modal" onClick={() => addClick(item)} buttonText="Add to" />
          </div>
        </div>
      )}
    </CustomModal>
  );
};

export default ProductModal;
