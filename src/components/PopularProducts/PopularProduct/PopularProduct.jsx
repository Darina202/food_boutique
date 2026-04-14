import CharacteristicList from '../../../components/CharacteristicList/CharacteristicList';
import styles from './popular-product.module.css';
import sprite from '../../../img/icons.svg';

const PopularProduct = ({ id, name, img, category, size, popularity }) => {
  return (
    <li key={id} className={styles.card}>
      <picture className={styles.picture}>
        <img src={img} alt={name} />
      </picture>
      <div className={styles.description}>
        <h4 className={styles.title}>{name}</h4>
        <CharacteristicList category={category} size={size} popularity={popularity} />
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
