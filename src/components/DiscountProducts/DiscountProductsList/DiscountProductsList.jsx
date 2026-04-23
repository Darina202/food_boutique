import styles from './discount-products-list.module.css';
import DiscountProduct from '../DiscountProduct/DiscountProduct';
import { useEffect, useState } from 'react';
import { getDiscountProducts } from '../../../api/products-api';
import useCartBtn from '../../../helpers/useCartBtn';

const DiscountProductsList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { handleClick } = useCartBtn();

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

  const elements = items
    ?.slice(0, 2)
    .map(item => <DiscountProduct key={item._id} product={item} onClick={() => handleClick(item)} />);

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      <section className={styles.discount}>
        <h3 className={styles.title}>Discount products</h3>
        <ul className={styles.list}>{elements}</ul>
      </section>
    </>
  );
};
export default DiscountProductsList;
