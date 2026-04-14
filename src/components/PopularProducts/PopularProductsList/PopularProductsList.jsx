import PopularProduct from '../PopularProduct/PopularProduct';
import styles from './popular-products-list.module.css';
import { selectAllProducts } from '../../../redux/products/products-selectors';
import { useSelector } from 'react-redux';

const PopularProductsList = () => {
  const { items, isLoading, error } = useSelector(selectAllProducts);

  console.log(items);

  const elements = items
    ?.slice(0, 5)
    .map(({ _id, name, img, category, size, popularity }) => (
      <PopularProduct id={_id} name={name} img={img} category={category} size={size} popularity={popularity} />
    ));

  return (
    <section className={styles.popular}>
      <h3 className={styles.title}>Popular products</h3>
      <ul className={styles.list}>{elements}</ul>
    </section>
  );
};
export default PopularProductsList;
