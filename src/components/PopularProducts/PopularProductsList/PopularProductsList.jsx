import PopularProduct from '../PopularProduct/PopularProduct';
import styles from './popular-products-list.module.css';
import { selectAllProducts } from '../../../redux/products/products-selectors';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPopularProducts } from '../../../api/products-api';

const PopularProductsList = () => {
  // const { items, isLoading, error } = useSelector(selectAllProducts);

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query');

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        setLoading(true);
        const data = await getPopularProducts();
        setItems(data ? data : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPopularProducts();
  }, []);

  const elements = items?.map(({ _id, name, img, category, size, popularity }) => (
    <PopularProduct key={_id} id={_id} name={name} img={img} category={category} size={size} popularity={popularity} />
  ));

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      <section className={styles.popular}>
        <h3 className={styles.title}>Popular products</h3>
        <ul className={styles.list}>{elements}</ul>
      </section>
    </>
  );
};
export default PopularProductsList;
