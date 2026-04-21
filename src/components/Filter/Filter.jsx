import styles from './filter.module.css';
import sprite from '../../img/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeAlphabet, changePrice, changePopularity } from '../../redux/filters/filters-slice';
import { selectFilteredProducts } from '../../redux/filters/filters-selectors';
import { useEffect, useState } from 'react';
import { getCategoriesList } from 'api/products-api';
import FilterCategories from './FilterCategories';
import KeywordFilter from './KeywordFilter';

const Filter = () => {
  const [categ, setCategory] = useState('');
  const options = {
    byABC: true,
    byABC2: false,
    byPrice: true,
    byPrice2: false,
    byPopularity: true,
    byPopularity2: false,
  };
  // const byABC = true;
  // const byABC2 = false;
  // const byPrice = true;
  // const byPopularity = true;

  const dispatch = useDispatch();

  // const toChangeFilter = ({ target }) => {
  //   dispatch(changeAlphabet(target.value));
  //   dispatch(changePrice(target.value));
  //   dispatch(changePopularity(target.value));
  // };

  console.log(categ);
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
          <select
            name="filtering"
            defaultValue={options.byABC}
            // onChange={toChangeFilter}
            className={styles.filtering}
          >
            <option value={options.byABC}>A to Z</option>
            <option value={options.byABC2}>Z to A</option>
            <option value={options.byPrice}>Cheap</option>
            <option value={options.byPrice2}>Expensive</option>
            <option value={options.byPopularity}>Popular</option>
            <option value={options.byPopularity2}>Not popular</option>
            <option value="">Show all</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
