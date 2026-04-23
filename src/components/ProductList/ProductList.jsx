import Product from '../Product/Product';
import styles from './product-list.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../../redux/products/products-operations';
import { selectAllProducts } from '../../redux/products/products-selectors';
import EmptyProductList from './EmptyProductList';
import useResponsiveLimit from '../../helpers/useResponsiveLimit';
import Pagination from '../../components/Pagination/Pagination';
import { selectFilteredProperties } from '../../redux/filters/filters-selectors';
import useCartBtn from '../../helpers/useCartBtn';

const ProductList = () => {
  const { items, isLoading, error, totalPages } = useSelector(selectAllProducts);
  const { category, keyword, byABC, byPrice, byPopularity } = useSelector(selectFilteredProperties);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = useResponsiveLimit();
  const { handleClick } = useCartBtn();

  useEffect(() => {
    setPage(1);
  }, [category, keyword, byABC, byPrice, byPopularity]);

  useEffect(() => {
    if (!limit) return;
    dispatch(fetchAllProducts({ page, limit, keyword, category, byABC, byPrice, byPopularity }));
  }, [dispatch, page, limit, category, keyword, byABC, byPrice, byPopularity]);

  const elements = items?.map(item => <Product key={item._id} product={item} onClick={() => handleClick(item)} />);

  return (
    <div className={styles.pages}>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error}</p>}

      {Boolean(items?.length > 0) ? <ul className={styles.list}>{elements}</ul> : <EmptyProductList />}
      {Boolean(totalPages > 1) && (
        <Pagination totalPages={totalPages} currentPage={page} handlePageClick={newPage => setPage(newPage)} />
      )}
    </div>
  );
};
export default ProductList;
