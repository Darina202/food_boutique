import styles from './product.module.css';
import sprite from '../../img/icons.svg';
import CharacteristicList from '../../components/CharacteristicList/CharacteristicList';

const Product = () => {
  return (
    <li className={styles.card}>
      <picture className={styles.picture}>
        <img src="https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png" alt="" />
      </picture>
      <h4 className={styles.title}>Avocado</h4>
      <CharacteristicList />
      <div className={styles.bottom}>
        <p className={styles.price}>$1.99</p>
        <button className={styles.icon}>
          <svg>
            <use href={`${sprite}#icon-cart`}></use>
          </svg>
        </button>
      </div>
    </li>
  );
};

export default Product;
