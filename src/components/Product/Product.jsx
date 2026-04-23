import styles from './product.module.css';
import sprite from '../../img/icons.svg';
import CharacteristicList from '../../components/CharacteristicList/CharacteristicList';
import CartButton from 'components/CartButton/CartButton';

const Product = ({ product, onClick }) => {
  const { _id, name, img, category, price, size, popularity, is10PercentOff } = product;

  return (
    <li className={styles.card}>
      <picture className={styles.picture}>
        <img src={img} alt={name} />
        {is10PercentOff && (
          <svg className={styles.discountIcon}>
            <use href={`${sprite}#icon-discount`}></use>
          </svg>
        )}
      </picture>
      <h4 className={styles.title}>{name}</h4>
      <CharacteristicList category={category} size={size} popularity={popularity} />
      <div className={styles.bottom}>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <CartButton onClick={onClick} id={_id} />
      </div>
    </li>
  );
};

export default Product;
