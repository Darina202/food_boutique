import Product from '../Product/Product';
import styles from './product-list.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllProducts } from '../../redux/products/products-operations';
import { selectAllProducts } from '../../redux/products/products-selectors';
import EmptyProductList from './EmptyProductList';

const ProductList = () => {
  const { items, isLoading, error } = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const elements = items?.map(({ _id, name, img, category, price, size, popularity }) => (
    <Product id={_id} name={name} img={img} category={category} price={price} size={size} popularity={popularity} />
  ));

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error}</p>}

      {Boolean(items?.length > 0) ? <ul className={styles.list}>{elements}</ul> : <EmptyProductList />}
    </>
  );
};
export default ProductList;
