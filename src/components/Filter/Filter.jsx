import styles from './filter.module.css';
import sprite from '../../img/icons.svg';

const Filter = () => {
  return (
    <div className={styles.productsFilter}>
      <h5 className={styles.title}>Filters:</h5>
      <ul className={styles.list}>
        <li className={styles.item}>
          <form className={styles.form}>
            <input className={styles.inputName} type="text" name="username" placeholder="Search for anything" />
            <button className={styles.icon} type="submit">
              <svg>
                <use href={`${sprite}#icon-search`}></use>
              </svg>
            </button>
          </form>
        </li>
        <li className={styles.item}>
          <select name="categories" className={styles.categories}>
            <option value="categories" disabled="disabled" selected="selected">
              Categories
            </option>
            <option value="Beverages">Beverages</option>
            <option value="Breads_&_Bakery">Breads / Bakery</option>
            <option value="Dairy">Dairy</option>
            <option value="Deli">Deli</option>
            <option value="Show all">Show all</option>
          </select>
        </li>
        <li className={styles.item}>
          <select name="filtering" className={styles.filtering}>
            <option value="A to Z" selected="selected">
              A to Z
            </option>
            <option value="Z to A">Z to A</option>
            <option value="Cheap">Cheap</option>
            <option value="Expensive">Expensive</option>
            <option value="Popular">Popular</option>
            <option value="Not popular">Not popular</option>
            <option value="Show all">Show all</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
