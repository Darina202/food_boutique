import styles from './discount-products-list.module.css';
import DiscountProduct from '../DiscountProduct/DiscountProduct';

const DiscountProductsList = () => {
  return (
    <section className={styles.discount}>
      <h3 className={styles.title}>Discount products</h3>
      <ul className={styles.list}>
        <DiscountProduct />
        <DiscountProduct />
      </ul>
    </section>
  );
};
export default DiscountProductsList;
