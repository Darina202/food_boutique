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
import ProductModal from 'components/ProductModal/ProductModal';
import useModal from 'helpers/useModal';
import { RingLoader } from 'react-spinners';

const ProductList = () => {
  const { items, isLoading, error, totalPages } = useSelector(selectAllProducts);
  const { category, keyword, byABC, byPrice, byPopularity } = useSelector(selectFilteredProperties);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = useResponsiveLimit();
  const { handleClick } = useCartBtn();
  const { isOpen, data: selectedProductId, openModal, closeModal } = useModal();

  useEffect(() => {
    setPage(1);
  }, [category, keyword, byABC, byPrice, byPopularity]);

  useEffect(() => {
    if (!limit) return;
    dispatch(fetchAllProducts({ page, limit, keyword, category, byABC, byPrice, byPopularity }));
  }, [dispatch, page, limit, category, keyword, byABC, byPrice, byPopularity]);

  const elements = items?.map(item => (
    <Product
      key={item._id}
      product={item}
      openModal={() => {
        openModal(item._id);
      }}
      onClick={() => handleClick(item)}
    />
  ));

  return (
    <section className={styles.pages}>
      {error && <p>{error}</p>}
      {isLoading ? (
        <RingLoader
          color="#586f1f"
          size={100}
          cssOverride={{
            display: 'flex',
            margin: '200px auto',
          }}
        />
      ) : (
        <>
          {Boolean(items?.length > 0) ? <ul className={styles.list}>{elements}</ul> : <EmptyProductList />}
          {Boolean(totalPages > 1) && (
            <Pagination totalPages={totalPages} currentPage={page} handlePageClick={newPage => setPage(newPage)} />
          )}
        </>
      )}
      <ProductModal selectedProductId={selectedProductId} modalIsOpen={isOpen} setModalIsOpen={closeModal} />
    </section>
  );
};
export default ProductList;
