import CharacteristicList from '../../../components/CharacteristicList/CharacteristicList';
import styles from './popular-product.module.css';
import sprite from '../../../img/icons.svg';

const PopularProduct = () => {
  return (
    <li className={styles.card}>
      <picture className={styles.picture}>
        <img src="https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png" alt="" />
      </picture>
      <div className={styles.description}>
        <h4 className={styles.title}>Ackee</h4>
        <CharacteristicList />
      </div>
      <button className={styles.icon}>
        <svg>
          <use href={`${sprite}#icon-cart`}></use>
        </svg>
      </button>
    </li>
  );
};
export default PopularProduct;
