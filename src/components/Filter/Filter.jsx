import styles from './filter.module.css';
import FilterCategories from './FilterCategories';
import KeywordFilter from './KeywordFilter';
import TypeFilter from './TypeFilter';

const Filter = () => {
  return (
    <div className={styles.productsFilter}>
      <h5 className={styles.title}>Filters:</h5>
      <ul className={styles.list}>
        <li className={styles.item}>
          <KeywordFilter />
        </li>
        <li className={styles.item}>
          <FilterCategories />
        </li>
        <li className={styles.item}>
          <TypeFilter />
        </li>
      </ul>
    </div>
  );
};

export default Filter;
