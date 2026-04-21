import { getCategoriesList } from '../../api/products-api';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../redux/filters/filters-slice';
import styles from './filter.module.css';

const FilterCategories = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategoriesList = async () => {
      try {
        const data = await getCategoriesList();
        setItems(data ? data : []);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };
    fetchCategoriesList();
  }, []);

  const elements = items?.map(item => (
    <option key={item} value={item}>
      {item.replace(/_/g, ' ')}
    </option>
  ));

  const toChangeCategory = ({ target }) => {
    dispatch(changeCategory(target.value));
  };

  return (
    <select name="categories" defaultValue="" onChange={toChangeCategory} className={styles.categories}>
      <option value="" disabled>
        Categories
      </option>
      {elements}
      <option value="">Show all</option>
    </select>
  );
};
export default FilterCategories;
