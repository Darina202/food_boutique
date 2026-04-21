import styles from './discount-products-list.module.css';
import DiscountProduct from '../DiscountProduct/DiscountProduct';
import { useEffect, useState } from 'react';
import { getDiscountProducts } from '../../../api/products-api';

const DiscountProductsList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query');

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
    .map(({ _id, name, img, price }) => <DiscountProduct key={_id} id={_id} name={name} img={img} price={price} />);

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
