import styles from './product.module.css';
import sprite from '../../img/icons.svg';
import CharacteristicList from '../../components/CharacteristicList/CharacteristicList';

const Product = ({ id, name, img, category, price, size, popularity }) => {
  return (
    <li className={styles.card}>
      <picture className={styles.picture}>
        <img src={img} alt={name} />
      </picture>
      <h4 className={styles.title}>{name}</h4>
      <CharacteristicList category={category} size={size} popularity={popularity} />
      <div className={styles.bottom}>
        <p className={styles.price}>${price.toFixed(2)}</p>
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
