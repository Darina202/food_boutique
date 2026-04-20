import Product from '../Product/Product';
import styles from './product-list.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../../redux/products/products-operations';
import { selectAllProducts } from '../../redux/products/products-selectors';
import EmptyProductList from './EmptyProductList';
import useResponsiveLimit from '../../helpers/useResponsiveLimit';
import Pagination from '../../components/Pagination/Pagination';

const ProductList = () => {
  const { items, isLoading, error, totalPages } = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = useResponsiveLimit();

  useEffect(() => {
    if (!limit) return;
    dispatch(fetchAllProducts({ page, limit }));
  }, [dispatch, page, limit]);

  const elements = items?.map(item => <Product key={item._id} product={item} />);

  return (
    <div className={styles.pages}>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error}</p>}

      {Boolean(items?.length > 0) ? <ul className={styles.list}>{elements}</ul> : <EmptyProductList />}
      {Boolean(items.length >= limit) && (
        <Pagination totalPages={totalPages} handlePageClick={newPage => setPage(newPage)} />
      )}
    </div>
  );
};
export default ProductList;
