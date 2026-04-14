import styles from './characteristic-list.module.css';

const CharacteristicList = ({ category, size, popularity }) => {
  return (
    <ul className={styles.list}>
      <li>
        <p className={styles.characteristic}>
          Category: <span>{category}</span>
        </p>
      </li>
      <li>
        <p className={styles.characteristic}>
          Size: <span>{size}</span>
        </p>
      </li>
      <li>
        <p className={styles.characteristic}>
          Popularity: <span>{popularity}</span>
        </p>
      </li>
    </ul>
  );
};
export default CharacteristicList;
