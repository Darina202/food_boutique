import CharacteristicList from '../../CharacteristicList/CharacteristicList';
import styles from './popular-product.module.css';
import CartButton from '../../CartButton/CartButton';

const PopularProduct = ({ product, onClick, openModal }) => {
  const { _id, name, img, category, size, popularity } = product;
  return (
    <li className={styles.card} onClick={openModal}>
      <picture className={styles.picture}>
        <img src={img} alt={name} />
      </picture>
      <div className={styles.description}>
        <h4 className={styles.title}>{name}</h4>
        <CharacteristicList category={category} size={size} popularity={popularity} />
      </div>
      <CartButton id={_id} colorClass="popular" onClick={onClick} />
    </li>
  );
};
export default PopularProduct;
