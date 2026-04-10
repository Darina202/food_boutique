import styles from './characteristic-list.module.css';

const CharacteristicList = () => {
  return (
    <ul className={styles.list}>
      <li>
        <p className={styles.characteristic}>
          Category: <span>Fresh Produce</span>
        </p>
      </li>
      <li>
        <p className={styles.characteristic}>
          Size: <span>Each</span>
        </p>
      </li>
      <li>
        <p className={styles.characteristic}>
          Popularity: <span>0</span>
        </p>
      </li>
    </ul>
  );
};
export default CharacteristicList;
