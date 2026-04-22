import styles from './filter.module.css';
import { useDispatch } from 'react-redux';
import { setSort } from '../../redux/filters/filters-slice';

const TypeFilter = () => {
  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    const value = target.value;

    if (!value) {
      dispatch(setSort({ type: null }));
      return;
    }

    const [type, val] = value.split('_');

    dispatch(
      setSort({
        type,
        value: val === 'true',
      })
    );
  };

  return (
    <select name="filtering" defaultValue="abc_true" onChange={handleChange} className={styles.filtering}>
      <option value="abc_true">A to Z</option>
      <option value="abc_false">Z to A</option>
      <option value="price_true">Cheap</option>
      <option value="price_false">Expensive</option>
      <option value="popularity_false">Popular</option>
      <option value="popularity_true">Not popular</option>
      <option value="">Show all</option>
    </select>
  );
};
export default TypeFilter;
