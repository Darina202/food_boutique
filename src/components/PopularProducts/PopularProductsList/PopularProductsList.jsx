import PopularProduct from '../PopularProduct/PopularProduct';
import styles from './popular-products-list.module.css';

const PopularProductsList = () => {
  return (
    <section className={styles.popular}>
      <h3 className={styles.title}>Popular products</h3>
      <ul className={styles.list}>
        <PopularProduct />
        <PopularProduct />
        <PopularProduct />
        <PopularProduct />
        <PopularProduct />
      </ul>
    </section>
  );
};
export default PopularProductsList;
