import styles from './discount-products-list.module.css';
import DiscountProduct from '../DiscountProduct/DiscountProduct';
import { useEffect, useState } from 'react';
import { getDiscountProducts } from '../../../api/products-api';
import useCartBtn from '../../../helpers/useCartBtn';
import useModal from '../../../helpers/useModal';
import ProductModal from '../../ProductModal/ProductModal';
import { RingLoader } from 'react-spinners';

const DiscountProductsList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { handleClick } = useCartBtn();
  const { isOpen, data: selectedProductId, openModal, closeModal } = useModal();
  const loopItems = [...items, ...items];
  console.log(loopItems);
  useEffect(() => {
    const fetchDiscountProducts = async () => {
      try {
        setLoading(true);
        const data = await getDiscountProducts();
        setItems(data ? data : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDiscountProducts();
  }, []);

  const elements = loopItems.map(item => (
    <DiscountProduct
      key={item._id}
      product={item}
      openModal={() => openModal(item._id)}
      onClick={() => handleClick(item)}
    />
  ));

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading ? (
        <RingLoader
          color="#586f1f"
          cssOverride={{
            display: 'block',
            margin: '100px auto',
          }}
        />
      ) : (
        <section className={styles.discount}>
          <h3 className={styles.title}>Discount products</h3>
          <div className={styles.wrapper}>
            <ul className={styles.list}>{elements}</ul>
          </div>
        </section>
      )}
      <ProductModal selectedProductId={selectedProductId} modalIsOpen={isOpen} setModalIsOpen={closeModal} />
    </>
  );
};
export default DiscountProductsList;
