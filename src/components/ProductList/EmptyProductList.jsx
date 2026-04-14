import styles from './product-list.module.css';

const EmptyProductList = () => {
  return (
    <div className={styles.nothing}>
      <h4 className={styles.title}>
        Nothing was found for the selected <span>filters...</span>
      </h4>
      <p className={styles.text}>
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
      </p>
    </div>
  );
};

export default EmptyProductList;
