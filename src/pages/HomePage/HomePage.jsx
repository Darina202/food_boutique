import ProductList from '../../components/ProductList/ProductList';
import Hero from '../../components/Hero/Hero';
import PopularProductsList from '../../components/PopularProducts/PopularProductsList/PopularProductsList';
import styles from './home-page.module.css';
import DiscountProductsList from '../../components/DiscountProducts/DiscountProductsList/DiscountProductsList';
import Filter from '../../components/Filter/Filter';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Filter />
      <div className={styles.products}>
        <ProductList />
        <aside className={styles.aside}>
          <PopularProductsList />
          <DiscountProductsList />
        </aside>
      </div>
    </>
  );
};
export default HomePage;
